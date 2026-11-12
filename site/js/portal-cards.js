/**
 * Componente reutilizável de cards estilo portal UFRJ
 */
(function () {
  "use strict";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function topicUrl(program, slug) {
    return "topico.html?p=" + encodeURIComponent(program) + "&t=" + encodeURIComponent(slug);
  }

  function renderCard(card, program) {
    var href = card.href || topicUrl(program || card.program || "index", card.slug);
    var delay = card.delay ? ' data-reveal-delay="' + card.delay + '"' : "";

    return (
      '<a href="' +
      esc(href) +
      '" class="portal-card reveal" data-reveal' +
      delay +
      ' aria-label="' +
      esc(card.title) +
      '">' +
      '<div class="portal-card__media">' +
      '<img src="' +
      esc(card.image) +
      '" alt="" width="600" height="400" loading="lazy" decoding="async">' +
      "</div>" +
      '<div class="portal-card__body">' +
      (card.category ? '<span class="portal-card__category">' + esc(card.category) + "</span>" : "") +
      "<h3 class=\"portal-card__title\">" +
      esc(card.title) +
      "</h3>" +
      '<p class="portal-card__excerpt">' +
      esc(card.excerpt) +
      "</p>" +
      '<span class="portal-card__footer">Saiba mais' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
      "</span>" +
      "</div></a>"
    );
  }

  function renderGrid(cards, options) {
    options = options || {};
    var program = options.program || "index";
    var cols = options.columns ? " portal-cards-grid--" + options.columns : "";
    var html =
      '<div class="portal-cards-grid' +
      cols +
      '">' +
      cards
        .map(function (card, i) {
          var c = Object.assign({}, card);
          if (!c.delay && i > 0) c.delay = i % 3;
          return renderCard(c, program);
        })
        .join("") +
      "</div>";
    return html;
  }

  function mountGrid(container, cards, options) {
    if (!container || !cards || !cards.length) return;
    container.innerHTML = renderGrid(cards, options);
    if (window.ReciclaCT && typeof window.ReciclaCT.initReveal === "function") {
      window.ReciclaCT.initReveal(container);
    }
  }

  function initDataGrids() {
    document.querySelectorAll("[data-portal-grid]").forEach(function (el) {
      var key = el.getAttribute("data-portal-grid");
      var program = el.getAttribute("data-portal-program") || "index";
      var content = window.TopicsContent;
      if (!content) return;

      var cards;
      if (program === "index" && content.index && content.index[key]) {
        cards = content.index[key];
      } else if (content[program]) {
        cards = content[program];
      } else if (content.getSection) {
        cards = content.getSection(program, key);
      }

      if (cards && cards.length) {
        mountGrid(el, cards, { program: program, columns: el.getAttribute("data-portal-columns") });
      }
    });
  }

  window.PortalCards = {
    esc: esc,
    topicUrl: topicUrl,
    renderCard: renderCard,
    renderGrid: renderGrid,
    mountGrid: mountGrid,
    init: initDataGrids,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDataGrids);
  } else {
    initDataGrids();
  }
})();
