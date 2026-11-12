/**
 * Galeria dinâmica — categorias editáveis, upload ilimitado, servidor ou localStorage.
 */
(function () {
  "use strict";

  var SLUG_MAP = {
    "galeria.html": "principal",
    "galeria-reciclact.html": "reciclact",
    "galeria-ct-eficiente.html": "ct-eficiente",
    "galeria-ct-verde.html": "ct-verde",
    "galeria-ct-eletro.html": "ct-eletro",
    "galeria-ct-residuos.html": "ct-residuos",
  };

  var FALLBACK_CATEGORIES = [
    { slug: "principal", name: "Geral" },
    { slug: "equipe", name: "Equipe" },
    { slug: "sustentabilidade", name: "Sustentabilidade" },
    { slug: "acoes", name: "Ações" },
    { slug: "estudantes", name: "Estudantes" },
    { slug: "ufrj", name: "UFRJ" },
    { slug: "conscientizacao", name: "Conscientização" },
    { slug: "reciclact", name: "ReciclaCT" },
    { slug: "ct-eficiente", name: "CT Eficiente" },
    { slug: "ct-verde", name: "CT Verde" },
    { slug: "ct-eletro", name: "CT Eletroeletrônicos" },
    { slug: "ct-residuos", name: "Resíduos Perigosos" },
  ];

  var categories = FALLBACK_CATEGORIES.slice();
  var serverPhotos = null;
  var useServer = false;

  function getSlug() {
    var params = new URLSearchParams(window.location.search);
    var cat = params.get("category");
    if (cat) return cat;
    if (window.GALERIA_PAGE_CONFIG && window.GALERIA_PAGE_CONFIG.slug) {
      return window.GALERIA_PAGE_CONFIG.slug;
    }
    var page = location.pathname.split("/").pop() || "galeria.html";
    return SLUG_MAP[page] || "principal";
  }

  function getPageName() {
    return (location.pathname.split("/").pop() || "galeria.html").split("?")[0];
  }

  function categoryName(slug) {
    var c = categories.find(function (x) {
      return x.slug === slug;
    });
    return (c && c.name) || slug;
  }

  async function loadCategories() {
    if (window.PACTGallery && PACTGallery.hasServer()) {
      var apiCats = await PACTGallery.getCategories();
      if (apiCats && apiCats.length) {
        categories = apiCats.map(function (c) {
          return { slug: c.slug, name: c.name };
        });
        return;
      }
    }
    if (window.PACTSiteSettings) {
      var data = await PACTSiteSettings.load();
      if (data && data.galleryCategories && data.galleryCategories.length) {
        categories = data.galleryCategories.map(function (c) {
          return { slug: c.slug, name: c.name };
        });
      }
    }
  }

  async function loadPhotos(slug) {
    useServer = false;
    serverPhotos = null;

    if (window.PACTGallery && PACTGallery.hasServer()) {
      var apiPhotos = await PACTGallery.getPhotos(slug);
      if (apiPhotos) {
        useServer = true;
        serverPhotos = apiPhotos;
        return apiPhotos;
      }
    }

    if (window.PACTStorage) {
      return PACTStorage.getOrderedPhotos(slug);
    }
    return [];
  }

  function renderGrid() {
    var grid = document.getElementById("galeria-full-grid");
    if (!grid) return Promise.resolve();

    var slug = getSlug();
    return loadPhotos(slug).then(function (photos) {
      var isAdm = window.PACTAuth && window.PACTAuth.isAdmin();
      var savedCover = localStorage.getItem("pact_cover_" + slug);

      grid.innerHTML = photos
        .map(function (p, i) {
          var adminOverlay = "";
          if (isAdm) {
            var isActive = savedCover ? p.src === savedCover : i === 0;
            var coverHtml = isActive
              ? '<span class="badge-cover-active">Capa Ativa</span>'
              : '<button type="button" class="btn btn-set-cover" data-src="' + p.src + '">Definir como Capa</button>';

            var moveOptionsHtml = categories
              .filter(function (c) {
                return c.slug !== slug;
              })
              .map(function (c) {
                return '<option value="' + c.slug + '">' + c.name + "</option>";
              })
              .join("");

            adminOverlay =
              '<div class="admin-photo-actions">' +
              '<div class="admin-photo-actions__row">' +
              coverHtml +
              '<button type="button" class="btn btn-delete-photo" data-id="' +
              (p.id || "") +
              '" data-src="' +
              p.src +
              '" title="Remover Foto">&times; Excluir</button>' +
              "</div>" +
              '<div class="admin-photo-actions__row" style="margin-top:0.4rem;">' +
              '<select class="select-move-photo" data-id="' +
              (p.id || "") +
              '" data-src="' +
              p.src +
              '" data-cap="' +
              (p.cap || "") +
              '" data-alt="' +
              (p.alt || "") +
              '">' +
              '<option value="">Mover para pasta...</option>' +
              moveOptionsHtml +
              "</select></div></div>";
          }

          return (
            '<figure class="galeria-page__item galeria__item-wrapper">' +
            adminOverlay +
            '<img src="' +
            p.src +
            '" alt="' +
            (p.alt || "") +
            '" loading="lazy">' +
            "<figcaption>" +
            (p.cap || "") +
            "</figcaption></figure>"
          );
        })
        .join("");

      if (!photos.length) {
        grid.innerHTML = '<p class="cms-empty">Nenhuma foto nesta categoria ainda.</p>';
      }
    });
  }

  function initCategoriesNav() {
    if (getPageName() !== "galeria.html") return;

    var slug = getSlug();
    var grid = document.getElementById("galeria-full-grid");
    if (!grid) return;

    var navContainer = document.getElementById("gallery-category-nav");
    if (!navContainer) {
      navContainer = document.createElement("div");
      navContainer.id = "gallery-category-nav";
      navContainer.className = "gallery-category-nav container";
      grid.parentNode.insertBefore(navContainer, grid);
    }

    navContainer.innerHTML = categories
      .map(function (c) {
        var active = c.slug === slug ? " is-active" : "";
        return (
          '<a href="galeria.html?category=' +
          encodeURIComponent(c.slug) +
          '" class="gallery-nav-pill' +
          active +
          '">' +
          c.name +
          "</a>"
        );
      })
      .join("");
  }

  function initTitle() {
    var titleEl = document.querySelector(".section__title .text-gradient") || document.querySelector(".section__title");
    if (titleEl) titleEl.textContent = categoryName(getSlug());
  }

  function initAdminUpload() {
    var adminBar = document.getElementById("galeria-admin-bar");
    if (adminBar) adminBar.hidden = true;
  }

  function initLightbox() {
    var lightbox = document.getElementById("gallery-lightbox");
    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.id = "gallery-lightbox";
      lightbox.className = "gallery-lightbox";
      lightbox.innerHTML =
        '<button class="gallery-lightbox__close" aria-label="Fechar">&times;</button>' +
        '<img class="gallery-lightbox__image" src="" alt="">' +
        '<div class="gallery-lightbox__caption"></div>';
      document.body.appendChild(lightbox);
      lightbox.addEventListener("click", function (e) {
        if (e.target.closest(".gallery-lightbox__image") && !e.target.closest(".gallery-lightbox__close")) return;
        lightbox.classList.remove("is-active");
        document.body.style.overflow = "";
      });
    }

    document.body.addEventListener("click", function (e) {
      var img = e.target.closest(".galeria-page__item img, .galeria__item img");
      if (!img) return;
      if (
        e.target.closest(".admin-photo-actions") ||
        e.target.closest(".btn-set-cover") ||
        e.target.closest(".btn-delete-photo") ||
        e.target.closest(".select-move-photo")
      ) {
        return;
      }
      e.preventDefault();
      var container = img.closest("figure, .galeria__item");
      var capText = "";
      if (container) {
        var figcap = container.querySelector("figcaption, .galeria__caption");
        if (figcap) capText = figcap.textContent;
      }
      lightbox.querySelector(".gallery-lightbox__image").src = img.src;
      lightbox.querySelector(".gallery-lightbox__image").alt = img.alt || "";
      lightbox.querySelector(".gallery-lightbox__caption").textContent = capText;
      lightbox.classList.add("is-active");
      document.body.style.overflow = "hidden";
    });
  }

  function bindAdminClicks() {
    var grid = document.getElementById("galeria-full-grid");
    if (!grid) return;

    grid.addEventListener("click", function (e) {
      var btnCover = e.target.closest(".btn-set-cover");
      if (btnCover) {
        e.preventDefault();
        localStorage.setItem("pact_cover_" + getSlug(), btnCover.getAttribute("data-src"));
        renderGrid();
        return;
      }

      var btnDelete = e.target.closest(".btn-delete-photo");
      if (btnDelete) {
        e.preventDefault();
        if (!confirm("Remover esta foto desta pasta?")) return;
        var id = btnDelete.getAttribute("data-id");
        var src = btnDelete.getAttribute("data-src");
        var slug = getSlug();

        if (useServer && id && window.PACTGallery) {
          PACTGallery.deletePhoto(id).then(function () {
            renderGrid();
          });
          return;
        }
        if (window.PACTStorage) {
          PACTStorage.deletePhoto(slug, src);
          renderGrid();
        }
      }
    });

    grid.addEventListener("change", function (e) {
      var selectMove = e.target.closest(".select-move-photo");
      if (!selectMove) return;
      var targetSlug = selectMove.value;
      if (!targetSlug) return;

      var id = selectMove.getAttribute("data-id");
      var src = selectMove.getAttribute("data-src");
      var cap = selectMove.getAttribute("data-cap");
      var alt = selectMove.getAttribute("data-alt");
      var currentSlug = getSlug();

      if (useServer && id && window.PACTGallery) {
        PACTGallery.movePhoto(id, targetSlug).then(function () {
          alert("Foto movida para: " + categoryName(targetSlug));
          renderGrid();
        });
        return;
      }

      if (window.PACTStorage) {
        PACTStorage.movePhoto(src, cap, alt, currentSlug, targetSlug);
        alert("Foto movida para: " + categoryName(targetSlug));
        renderGrid();
      }
    });
  }

  async function init() {
    await loadCategories();
    await renderGrid();
    initCategoriesNav();
    initTitle();
    initAdminUpload();
    initLightbox();
    bindAdminClicks();
  }

  document.addEventListener("pact-settings-loaded", function () {
    loadCategories().then(function () {
      initCategoriesNav();
      initTitle();
    });
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
