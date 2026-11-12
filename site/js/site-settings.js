/**
 * Configurações globais do site (header, fundos, categorias da galeria).
 */
(function (global) {
  "use strict";

  var cache = null;

  function pageSlug() {
    if (global.PACTCMS && PACTCMS.detectPageSlug) return PACTCMS.detectPageSlug();
    var path = location.pathname.split("/").pop() || "index.html";
    var map = {
      "index.html": "index",
      "": "index",
      "reciclact.html": "reciclact",
      "ct-eficiente.html": "ct-eficiente",
      "ct-verde.html": "ct-verde",
      "ct-eletro.html": "ct-eletro",
      "ct-residuosperigosos.html": "ct-residuos",
    };
    return map[path] || document.body.getAttribute("data-cms-page") || "index";
  }

  function applyHeader(header) {
    if (!header) return;
    var logo = document.querySelector(".logo-link .logo-img, .logo-link img.logo-img");
    if (logo && header.logo) logo.src = header.logo;

    var drawerLogo = document.querySelector(".programs-drawer__head a img");
    if (drawerLogo && header.logo) drawerLogo.src = header.logo;

    var topLink = document.querySelector(".header__toplink");
    if (topLink) {
      if (header.topLinkText) {
        var textEl = topLink.querySelector(".header__toplink-text");
        if (textEl) textEl.textContent = header.topLinkText;
        else topLink.appendChild(document.createTextNode(header.topLinkText));
      }
      if (header.topLinkUrl) topLink.href = header.topLinkUrl;
    }
  }

  function applyHeroBackgrounds(backgrounds) {
    if (!backgrounds) return;
    var slug = pageSlug();
    var url = backgrounds[slug];
    if (!url) return;
    var bg = document.querySelector(".hero__bg");
    if (bg) bg.style.backgroundImage = "url('" + url + "')";
  }

  async function load() {
    if (cache) return cache;
    try {
      var res = await fetch("api/settings/public.json");
      if (!res.ok) return null;
      cache = await res.json();
      return cache;
    } catch (e) {
      return null;
    }
  }

  async function init() {
    var data = await load();
    if (!data) return;
    applyHeader(data.settings && data.settings.header);
    applyHeroBackgrounds(data.settings && data.settings.hero_backgrounds);
    document.dispatchEvent(new CustomEvent("pact-settings-loaded", { detail: data }));
  }

  global.PACTSiteSettings = {
    load: load,
    init: init,
    applyHeader: applyHeader,
    applyHeroBackgrounds: applyHeroBackgrounds,
    pageSlug: pageSlug,
    getCategories: function () {
      return (cache && cache.galleryCategories) || [];
    },
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  document.addEventListener("pact-cms-loaded", function () {
    if (cache && cache.settings) applyHeroBackgrounds(cache.settings.hero_backgrounds);
  });
})(window);
