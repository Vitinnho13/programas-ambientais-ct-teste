/**
 * Renderizador de Cards para o Layout de Portal
 * Puxa os dados de window.TopicsContent e popula os grids
 */
(function() {
  "use strict";

  function esc(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderGrid(containerId, program, category, customOnly) {
    var container = document.getElementById(containerId);
    if (!container || !window.TopicsContent) return;
    
    var data = window.TopicsContent[program];
    if (!data) return;
    
    var items = category ? data[category] : data;
    if (customOnly && items) {
      items = items.filter(function (item) { return item.custom; });
    }
    
    if (!items || !items.length) {
      container.innerHTML = '<p class="cms-empty">Conteúdo em breve.</p>';
      return;
    }

    var displayedTopics = new Set();
    document.querySelectorAll("[data-topic-source]").forEach(function (display) {
      if (container.contains(display)) return;
      displayedTopics.add(display.getAttribute("data-topic-source"));
    });
    items = items.filter(function (item) {
      return !displayedTopics.has(program + ":" + item.slug);
    });
    if (!items.length) {
      container.innerHTML = "";
      return;
    }
    
    var html = items.map(function(item) {
      var imgSrc = item.image || 'images/logo.png';
      var design = item.design || {};
      var cardStyle = ["standard", "editorial", "feature"].indexOf(design.cardStyle) >= 0 ? design.cardStyle : "standard";
      var cardSize = ["small", "medium", "large"].indexOf(design.cardSize) >= 0 ? design.cardSize : "medium";

      return (
        '<a href="topico.html?p=' + encodeURIComponent(program) + '&t=' + encodeURIComponent(item.slug) + '" class="news-card news-card--' + cardStyle + ' news-card--size-' + cardSize + '" data-topic-source="' + esc(program + ":" + item.slug) + '">' +
          '<div class="news-card__image-wrapper">' +
            '<img src="' + esc(imgSrc) + '" alt="' + esc(item.title) + '" class="news-card__image" data-topic-field="image" loading="lazy" onerror="this.onerror=null;this.src=\'images/logo.png\'">' +
          '</div>' +
          '<div class="news-card__content">' +
            '<span class="news-card__category" data-topic-field="category">' + esc(item.category || program) + '</span>' +
            '<h3 class="news-card__title" data-topic-field="title">' + esc(item.title) + '</h3>' +
            '<p class="news-card__excerpt" data-topic-field="excerpt">' + esc(item.excerpt) + '</p>' +
          '</div>' +
        '</a>'
      );
    }).join('');
    
    container.innerHTML = html;
  }

  function renderTopicDisplays() {
    if (!window.TopicsContent || !window.TopicsContent.getTopic) return;

    document.querySelectorAll("[data-topic-source]").forEach(function (display) {
      var identity = display.getAttribute("data-topic-source").split(":");
      if (identity.length !== 2) return;
      var topic = window.TopicsContent.getTopic(identity[0], identity[1]);
      if (!topic) return;

      display.querySelectorAll("[data-topic-field]").forEach(function (field) {
        var type = field.getAttribute("data-topic-field");
        if (type === "title") field.textContent = topic.title || "";
        else if (type === "category") field.textContent = topic.category || "";
        else if (type === "excerpt") field.textContent = topic.excerpt || "";
        else if (type === "link") {
          field.href = "topico.html?p=" + encodeURIComponent(identity[0]) + "&t=" + encodeURIComponent(identity[1]);
        } else if (type === "image") {
          if (topic.image) {
            field.src = topic.image;
            field.alt = topic.title || "";
            field.hidden = false;
          } else {
            field.removeAttribute("src");
            field.hidden = true;
          }
        }
      });

      if (display.matches(".timeline__card")) {
        display.setAttribute("aria-label", "Saiba mais sobre " + (topic.title || ""));
      }
    });
  }

  function initPortal() {
    if (!window.TopicsContent) return;
    renderAll();
  }

  function renderAll() {
    renderGrid('portal-index-sobre', 'index', 'sobre');
    renderGrid('portal-index-economia', 'index', 'economia');
    renderGrid('portal-index-objetivos', 'index', 'objetivos');
    renderGrid('portal-index-resultados', 'index', 'resultados');
    renderGrid('portal-index-projetos', 'index', 'projetos', true);

    renderGrid('portal-reciclact', 'reciclact');
    renderGrid('portal-ct-verde', 'ct-verde');
    renderGrid('portal-ct-eficiente', 'ct-eficiente');
    renderGrid('portal-ct-eletro', 'ct-eletro');
    renderGrid('portal-ct-residuos', 'ct-residuos');
    renderTopicDisplays();
  }

  window.PortalRenderer = {
    init: initPortal,
    renderGrid: renderGrid,
    renderTopicDisplays: renderTopicDisplays,
  };

  document.addEventListener("pact-cms-loaded", renderAll);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortal);
  } else {
    initPortal();
  }
  if (window.__pactCmsLoaded) renderAll();
})();
