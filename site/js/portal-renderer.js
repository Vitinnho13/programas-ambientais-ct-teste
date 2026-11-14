/**
 * Renderizador de Cards para o Layout de Portal
 * Puxa os dados de window.TopicsContent e popula os grids
 */
(function() {
  "use strict";

  function renderGrid(containerId, program, category) {
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var data = window.TopicsContent[program];
    if (!data) return;
    
    var items = category ? data[category] : data;
    
    if (!items || !items.length) {
      container.innerHTML = '<p class="cms-empty">Conteúdo em breve.</p>';
      return;
    }
    
    var html = items.map(function(item) {
      var imgSrc = item.image || 'images/logo.png';
      
      return (
        '<a href="topico.html?p=' + program + '&t=' + item.slug + '" class="news-card">' +
          '<div class="news-card__image-wrapper">' +
            '<img src="' + imgSrc + '" alt="' + item.title + '" class="news-card__image" loading="lazy" onerror="this.onerror=null;this.src=\'' + 'images/logo.png' + '\'">' +
          '</div>' +
          '<div class="news-card__content">' +
            '<span class="news-card__category">' + (item.category || program) + '</span>' +
            '<h3 class="news-card__title">' + item.title + '</h3>' +
            '<p class="news-card__excerpt">' + item.excerpt + '</p>' +
          '</div>' +
        '</a>'
      );
    }).join('');
    
    container.innerHTML = html;
  }

  function initPortal() {
    if (!window.TopicsContent) return;
    renderGrid('portal-index-sobre', 'index', 'sobre');
    renderGrid('portal-index-economia', 'index', 'economia');
    renderGrid('portal-index-objetivos', 'index', 'objetivos');
    renderGrid('portal-index-resultados', 'index', 'resultados');

    renderGrid('portal-reciclact', 'reciclact');
    renderGrid('portal-ct-verde', 'ct-verde');
    renderGrid('portal-ct-eficiente', 'ct-eficiente');
    renderGrid('portal-ct-eletro', 'ct-eletro');
    renderGrid('portal-ct-residuos', 'ct-residuos');
  }

  window.PortalRenderer = { init: initPortal, renderGrid: renderGrid };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortal);
  } else {
    initPortal();
  }
})();