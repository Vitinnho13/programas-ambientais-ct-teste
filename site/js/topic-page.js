/**
 * Renderiza páginas de tópico detalhado (topico.html)
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

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var existing = document.querySelector('script[src="' + src + '"]');
      if (existing) {
        resolve();
        return;
      }
      var s = document.createElement("script");
      s.src = src;
      s.defer = true;
      s.onload = resolve;
      s.onerror = reject;
      document.body.appendChild(s);
    });
  }

  function renderBlocks(blocks) {
    if (!blocks || !blocks.length) return "";
    return (
      '<div class="topic-page__blocks">' +
      blocks
        .map(function (block) {
          if (!block) return "";
          if (block.type === "image" && block.url) {
            return (
              '<figure class="topic-page__block topic-page__block--image">' +
              '<img src="' +
              esc(block.url) +
              '" alt="' +
              esc(block.caption || "") +
              '">' +
              (block.caption ? "<figcaption>" + esc(block.caption) + "</figcaption>" : "") +
              "</figure>"
            );
          }
          if (block.type === "text" || block.html || block.title) {
            return (
              '<section class="topic-page__block topic-page__block--text">' +
              (block.title ? "<h2>" + esc(block.title) + "</h2>" : "") +
              '<div class="topic-page__block-body">' +
              (block.html || "") +
              "</div></section>"
            );
          }
          return "";
        })
        .join("") +
      "</div>"
    );
  }

  function renderTopic(topic) {
    var wrap = document.getElementById("topic-page");
    if (!wrap || !topic) return;

    var backUrl = topic.backUrl || "index.html";
    var interactiveHtml = "";

    if (topic.interactive && window.TopicInteractives) {
      interactiveHtml =
        '<section class="topic-page__interactive">' +
        '<h2 class="topic-page__interactive-title">Experiência interativa</h2>' +
        window.TopicInteractives.get(topic.interactive) +
        "</section>";
    }

    wrap.innerHTML =
      '<a href="' +
      esc(backUrl) +
      '" class="topic-page__back">' +
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
      " Voltar</a>" +
      '<header class="topic-page__header">' +
      (topic.category ? '<span class="topic-page__category">' + esc(topic.category) + "</span>" : "") +
      "<h1 class=\"topic-page__title\">" +
      esc(topic.title) +
      "</h1></header>" +
      (topic.image
        ? '<figure class="topic-page__hero"><img src="' + esc(topic.image) + '" alt=""></figure>'
        : "") +
      '<article class="topic-page__content">' +
      (topic.contentHtml || "") +
      "</article>" +
      renderBlocks(topic.blocks) +
      interactiveHtml;

    document.title = topic.title + " | Programas Ambientais do CT";

    if (topic.scripts && topic.scripts.length) {
      topic.scripts.reduce(function (chain, src) {
        return chain.then(function () {
          return loadScript(src);
        });
      }, Promise.resolve());
    }
  }

  function mergeTopic(base, saved) {
    if (!saved) return base;
    var merged = Object.assign({}, base || {});
    if (saved.title) merged.title = saved.title;
    if (saved.category) merged.category = saved.category;
    if (saved.excerpt) merged.excerpt = saved.excerpt;
    if (saved.image) merged.image = saved.image;
    if (saved.contentHtml) merged.contentHtml = saved.contentHtml;
    if (Array.isArray(saved.blocks)) merged.blocks = saved.blocks;
    return merged;
  }

  async function fetchSaved(program, slug) {
    try {
      var res = await fetch("api/topics/" + encodeURIComponent(program) + "/" + encodeURIComponent(slug) + ".json", {
        credentials: "include",
      });
      if (!res.ok) return null;
      var data = await res.json();
      return data.topic || null;
    } catch (e) {
      return null;
    }
  }

  async function init() {
    var params = new URLSearchParams(location.search);
    var program = params.get("p") || params.get("program") || "index";
    var slug = params.get("t") || params.get("topic");
    var wrap = document.getElementById("topic-page");

    if (!slug) {
      location.href = program === "index" ? "index.html" : program + ".html";
      return;
    }

    var content = window.TopicsContent;
    var topic = content && content.getTopic ? content.getTopic(program, slug) : null;
    var saved = await fetchSaved(program, slug);
    topic = mergeTopic(topic, saved);

    if (!topic || !topic.title) {
      wrap.innerHTML =
        '<p>Tópico não encontrado.</p><p><a href="' +
        esc(program === "index" ? "index.html" : program + ".html") +
        '">← Voltar</a></p>';
      return;
    }

    if (!topic.backUrl) {
      topic.backUrl = program === "index" ? "index.html" : program + ".html";
    }

    renderTopic(topic);

    if (window.TopicEditor) {
      window.TopicEditor.mount(program, slug, topic);
    }
  }

  window.TopicPage = { renderTopic: renderTopic, mergeTopic: mergeTopic };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
