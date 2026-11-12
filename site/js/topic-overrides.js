/**
 * Aplica edições de tópicos salvas no CMS nas grades da página principal.
 */
(function () {
  "use strict";

  function refreshGrids() {
    if (window.PortalCards && typeof window.PortalCards.init === "function") {
      window.PortalCards.init();
    }
    if (window.PortalRenderer && typeof window.PortalRenderer.init === "function") {
      window.PortalRenderer.init();
    }
  }

  function decorateCards(user) {
    if (!user) return;
    var canEdit = user.role === "admin" || user.role === "super_admin" || user.role === "editor";
    if (!canEdit) return;

    document.querySelectorAll('.news-card[href*="topico.html"], .portal-card[href*="topico.html"], .eco-highlight[href*="topico.html"]').forEach(function (card) {
      if (card.querySelector(".topic-card-edit")) return;
      try {
        var url = new URL(card.getAttribute("href"), location.origin);
        var program = url.searchParams.get("p") || "index";
        var slug = url.searchParams.get("t");
        if (!slug) return;
        card.classList.add("has-topic-edit");
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "topic-card-edit";
        btn.textContent = "Editar";
        btn.setAttribute("aria-label", "Editar tópico");
        btn.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          location.href = "topico.html?p=" + encodeURIComponent(program) + "&t=" + encodeURIComponent(slug) + "&edit=1";
        };
        card.appendChild(btn);
      } catch (e) {}
    });
  }

  async function init() {
    try {
      var res = await fetch("api/topics.json", { credentials: "include" });
      if (res.ok) {
        var data = await res.json();
        if (window.TopicsContent && window.TopicsContent.applyAll) {
          window.TopicsContent.applyAll(data.topics || []);
          refreshGrids();
        }
      }
    } catch (e) {}

  }

  window.TopicOverrides = { init: init };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
