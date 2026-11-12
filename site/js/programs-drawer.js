/**
 * Menu lateral — abas com logo em plano de fundo.
 */
(function () {
  "use strict";

  var currentPath = window.location.pathname.split("/").pop() || "index.html";

  var programs = [
    { href: "index.html", label: "Programas Ambientais do CT", logo: "images/logo.png", tile: false },
    { href: "reciclact.html", label: "ReciclaCT", logo: "images/logo_reciclact.png", tile: true },
    { href: "ct-eficiente.html", label: "CT Eficiente", logo: "images/logo_cteficiente.png", tile: true },
    { href: "ct-verde.html", label: "CT Verde", logo: "images/logo_ctverde.png", tile: true },
    {
      href: "ct-eletro.html",
      label: "CT Eletroeletrônicos",
      logo: "images/logo_cteletroeletronicos.png",
      tile: true,
      children: [
        { href: "ct-eletro.html", label: "Sobre o programa" },
      ],
    },
    {
      href: "ct-residuosperigosos.html",
      label: "CT Resíduos Perigosos",
      logo: "images/logo_ctresiduosperigosos.png",
      tile: true,
      children: [
        { href: "ct-residuosperigosos.html", label: "Sobre o programa" },
      ],
    },
  ];

  function isActive(href) {
    return currentPath === href || (currentPath === "" && href === "index.html");
  }

  function isGroupActive(item) {
    if (isActive(item.href)) return true;
    if (!item.children) return false;
    return item.children.some(function (c) {
      return isActive(c.href);
    });
  }

  function renderLink(href, label, sub) {
    var active = isActive(href) ? " programs-drawer__link--active" : "";
    var cls = sub ? "programs-drawer__link programs-drawer__link--sub" : "programs-drawer__link";
    return '<a href="' + href + '" class="' + cls + active + '">' + label + "</a>";
  }

  function renderProgramLink(item) {
    var active = isGroupActive(item) ? " programs-drawer__link--active" : "";
    if (item.tile) {
      return (
        '<a href="' +
        item.href +
        '" class="programs-drawer__link programs-drawer__link--tile' +
        active +
        '" title="' +
        item.label +
        '"><img class="programs-drawer__tile-img" src="' +
        item.logo +
        '" alt="' +
        item.label +
        '" onerror="this.onerror=null;this.src=\'images/logo.png\'"></a>'
      );
    }
    return (
      '<a href="' +
      item.href +
      '" class="programs-drawer__link' +
      active +
      '"><img class="programs-drawer__logo" src="' +
      item.logo +
      '" alt="" onerror="this.src=\'images/logo.png\'"><span class="programs-drawer__label">' +
      item.label +
      "</span></a>"
    );
  }

  function renderNav() {
    var html = "";
    programs.forEach(function (item, i) {
      if (i === 1) html += '<p class="programs-drawer__divider"></p>';
      var hasChildren = item.children && item.children.length;
      var wrapClass = hasChildren ? " programs-drawer__item programs-drawer__item--group" : " programs-drawer__item";
      html += '<div class="' + wrapClass.trim() + '">';
      if (hasChildren) html += '<div class="programs-drawer__group">';
      html += renderProgramLink(item);
      if (hasChildren) {
        html += '<div class="programs-drawer__sub">';
        item.children.forEach(function (c) {
          html += renderLink(c.href, c.label, true);
        });
        html += "</div></div>";
      }
      html += "</div>";
    });
    return html;
  }

  function injectDrawer() {
    var overlay = document.createElement("div");
    overlay.className = "programs-drawer-overlay";
    overlay.id = "programs-drawer-overlay";
    overlay.hidden = true;

    var aside = document.createElement("aside");
    aside.className = "programs-drawer";
    aside.id = "programs-drawer";
    aside.setAttribute("aria-hidden", "true");
    aside.innerHTML =
      '<div class="programs-drawer__head">' +
      '<a href="index.html"><img src="images/logo.png" alt="Início" width="150" height="40"></a>' +
      '<button type="button" class="programs-drawer__close" id="programs-drawer-close" aria-label="Fechar">×</button>' +
      '</div><nav class="programs-drawer__nav">' +
      renderNav() +
      "</nav>";

    document.body.appendChild(overlay);
    document.body.appendChild(aside);
  }

  function setOpen(open) {
    var drawer = document.getElementById("programs-drawer");
    var overlay = document.getElementById("programs-drawer-overlay");
    var toggle = document.getElementById("programs-drawer-toggle");
    if (!drawer || !overlay) return;
    document.body.classList.toggle("programs-drawer-open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    if (open) overlay.removeAttribute("hidden");
    else overlay.setAttribute("hidden", "");
    if (toggle) toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }

  function init() {
    injectDrawer();
    var toggle = document.getElementById("programs-drawer-toggle");
    var closeBtn = document.getElementById("programs-drawer-close");
    var overlay = document.getElementById("programs-drawer-overlay");
    if (toggle) {
      toggle.addEventListener("click", function () {
        setOpen(!document.body.classList.contains("programs-drawer-open"));
      });
    }
    if (closeBtn) closeBtn.addEventListener("click", function () { setOpen(false); });
    if (overlay) overlay.addEventListener("click", function () { setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
    document.querySelectorAll("#programs-drawer a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
