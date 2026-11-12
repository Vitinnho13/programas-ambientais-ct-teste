/**
 * Páginas públicas de notícias e eventos
 */
(function () {
  "use strict";

  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
    } catch (e) {
      return iso;
    }
  }

  async function loadNews() {
    var grid = document.getElementById("news-grid");
    if (!grid) return;
    try {
      var res = await fetch("api/news.json");
      var data = await res.json();
      if (!data.news || !data.news.length) {
        grid.innerHTML = '<p class="cms-empty">Nenhuma notícia publicada ainda.</p>';
        return;
      }
      grid.innerHTML = data.news
        .map(function (n) {
          return (
            '<article class="news-card">' +
            '<time datetime="' + (n.published_at || n.created_at) + '">' + formatDate(n.published_at || n.created_at) + "</time>" +
            "<h2>" + n.title + "</h2>" +
            "<p>" + (n.excerpt || "") + "</p>" +
            '<a href="noticia.html?slug=' + encodeURIComponent(n.slug) + '" class="btn btn--primary btn--sm">Ler mais</a>' +
            "</article>"
          );
        })
        .join("");
    } catch (e) {
      grid.innerHTML = "<p>Carregue o site pelo servidor Node.js para ver as notícias.</p>";
    }
  }

  async function loadEvents() {
    var grid = document.getElementById("events-grid");
    if (!grid) return;
    try {
      var res = await fetch("api/events.json");
      var data = await res.json();
      if (!data.events || !data.events.length) {
        grid.innerHTML = '<p class="cms-empty">Nenhum evento publicado ainda.</p>';
        return;
      }
      grid.innerHTML = data.events
        .map(function (ev) {
          return (
            '<article class="event-card">' +
            "<h2>" + ev.title + "</h2>" +
            "<p><strong>📅</strong> " + formatDate(ev.starts_at) + (ev.ends_at ? " — " + formatDate(ev.ends_at) : "") + "</p>" +
            (ev.location ? "<p><strong>📍</strong> " + ev.location + "</p>" : "") +
            '<div class="event-card__body">' + (ev.description_html || "") + "</div>" +
            "</article>"
          );
        })
        .join("");
    } catch (e) {
      grid.innerHTML = "<p>Carregue o site pelo servidor Node.js para ver os eventos.</p>";
    }
  }

  async function loadSingleNews() {
    var wrap = document.getElementById("news-article");
    if (!wrap) return;
    var slug = new URLSearchParams(location.search).get("slug");
    if (!slug) {
      location.href = "noticias.html";
      return;
    }
    try {
      var res = await fetch("api/news/" + encodeURIComponent(slug) + ".json");
      var data = await res.json();
      var n = data.news;
      wrap.innerHTML =
        '<header class="section__header"><time>' +
        formatDate(n.published_at || n.created_at) +
        "</time><h1>" +
        n.title +
        "</h1></header>" +
        '<div class="cms-article-body">' +
        (n.content_html || "") +
        "</div>" +
        '<p><a href="noticias.html">← Voltar às notícias</a></p>';
      document.title = n.title + " | Programas Ambientais do CT";
    } catch (e) {
      wrap.innerHTML = "<p>Notícia não encontrada.</p>";
    }
  }

  function init() {
    loadNews();
    loadEvents();
    loadSingleNews();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
