/**
 * Blocos reutilizáveis: galeria (preview), números, redes e contato.
 * Uso: data-page-config no <body> com JSON ou atributos data-*.
 */
(function () {
  "use strict";

  function getPageConfig() {
    var body = document.body;
    return {
      programName: body.getAttribute("data-program-name") || "Programas Ambientais do CT",
      galeriaTitle: body.getAttribute("data-galeria-title") || "Galeria",
      galeriaPage: body.getAttribute("data-galeria-page") || "galeria.html",
      numerosNote: body.getAttribute("data-numeros-note") || "Ajuste os valores conforme dados reais do programa.",
      contatoLead:
        body.getAttribute("data-contato-lead") ||
        "Quer apoiar, voluntariar-se ou saber mais? Envie uma mensagem.",
      counters: JSON.parse(body.getAttribute("data-counters") || "[]"),
    };
  }

  function defaultCounters() {
    return [
      { target: 850, suffix: "+", label: "Pessoas impactadas" },
      { target: 12, suffix: " t", label: "Resíduos gerenciados" },
      { target: 45, suffix: "+", label: "Ações realizadas" },
      { target: 32, suffix: "+", label: "Participantes" },
    ];
  }

  function renderNumeros(cfg, cms) {
    var el = document.getElementById("shared-numeros");
    if (!el) return;

    var counters =
      cms && cms.counters && cms.counters.length
        ? cms.counters
        : cfg.counters.length
          ? cfg.counters
          : defaultCounters();
    var note = (cms && cms.note) || cfg.numerosNote;
    var cards = counters
      .map(function (c, i) {
        return (
          '<div class="numero-card reveal" data-reveal' +
          (i ? ' data-reveal-delay="' + i + '"' : "") +
          ">" +
          '<span class="numero-card__value" data-counter data-target="' +
          c.target +
          '" data-suffix="' +
          (c.suffix || "") +
          '">0</span>' +
          '<span class="numero-card__label">' +
          c.label +
          "</span></div>"
        );
      })
      .join("");

    el.innerHTML =
      '<div class="container">' +
      '<header class="section__header section__header--center reveal" data-reveal>' +
      '<span class="section__label">Resultados</span>' +
      '<h2 class="section__title">Nossos <span class="text-gradient">números</span></h2>' +
      "</header>" +
      '<div class="numeros__grid">' +
      cards +
      "</div>" +
      '<p class="numeros__note reveal" data-reveal>' +
      note +
      "</p></div>";
  }

  function renderGaleriaPreview(cfg) {
    var el = document.getElementById("shared-galeria");
    if (!el) return;

    var slug = document.body.getAttribute("data-galeria-slug") || "principal";
    var photos = [];
    if (window.PACTStorage) {
      photos = window.PACTStorage.getOrderedPhotos(slug);
    }
    if (!photos.length) {
      photos = [
        { src: "images/logo.png", alt: "Foto", cap: "Ações no campus" },
        { src: "images/logo.png", alt: "Foto", cap: "Educação ambiental" },
        { src: "images/logo.png", alt: "Foto", cap: "Coleta seletiva" },
      ];
    }

    var items = photos
      .map(function (p, i) {
        return (
          '<figure class="galeria__item reveal" data-reveal' +
          (i ? ' data-reveal-delay="' + (i % 3) + '"' : "") +
          ' role="listitem">' +
          '<img src="' +
          (p.src || "images/logo.png") +
          '" alt="' +
          (p.alt || p.cap) +
          '" width="400" height="300" loading="lazy">' +
          '<figcaption class="galeria__caption">' +
          (p.cap || "Galeria") +
          "</figcaption></figure>"
        );
      })
      .join("");

    var adminGal = "";

    el.innerHTML =
      '<div class="container">' +
      '<header class="section__header section__header--center reveal" data-reveal>' +
      '<span class="section__label">Momento</span>' +
      '<h2 class="section__title">Galeria <span class="text-gradient">' +
      cfg.galeriaTitle +
      "</span></h2>" +
      '<p class="section__intro">Alguns registros das nossas ações. Adicione suas fotos na pasta images e na página completa da galeria.</p>' +
      "</header>" +
      '<div class="galeria__grid" role="list">' +
      items +
      "</div>" +
      adminGal +
      '<p class="galeria__more reveal" data-reveal">' +
      '<a href="' +
      cfg.galeriaPage +
      '" class="btn btn--primary">Ver todas as fotos</a></p></div>';
  }

  function renderRedes(cfg, cms) {
    var el = document.getElementById("shared-redes");
    if (!el) return;

    var cards = (cms && cms.cards) || [
      { name: "Instagram", handle: "@programasambientaisct", url: "https://instagram.com" },
      { name: "LinkedIn", handle: "Programas Ambientais CT", url: "https://linkedin.com" },
      { name: "YouTube", handle: "Vídeos e campanhas", url: "https://youtube.com" },
    ];
    var intro = (cms && cms.intro) || "Acompanhe as novidades do " + cfg.programName + ".";

    el.innerHTML =
      '<div class="container">' +
      '<header class="section__header section__header--center reveal" data-reveal>' +
      '<span class="section__label">' + ((cms && cms.label) || "Comunidade") + '</span>' +
      '<h2 class="section__title">Redes <span class="text-gradient">sociais</span></h2>' +
      '<p class="section__intro">' + intro + "</p></header>" +
      '<div class="redes__grid reveal" data-reveal>' +
      cards
        .map(function (c) {
          return (
            '<a href="' +
            (c.url || "#") +
            '" class="redes__card" target="_blank" rel="noopener noreferrer">' +
            "<strong>" +
            c.name +
            "</strong><span>" +
            c.handle +
            "</span></a>"
          );
        })
        .join("") +
      "</div></div>";
  }

  function renderContato(cfg, cms) {
    var el = document.getElementById("shared-contato");
    if (!el) return;

    var lead = (cms && cms.lead) || cfg.contatoLead;
    var email = (cms && cms.email) || "ambiental@ct.ufrj.br";
    var phone = (cms && cms.phone) || "(21) 3938-7452";

    el.innerHTML =
      '<div class="container contato__wrap">' +
      '<div class="contato__info reveal" data-reveal>' +
      '<span class="section__label">Fale conosco</span>' +
      '<h2 class="section__title">Entre em <span class="text-gradient">contato</span></h2>' +
      '<p class="contato__lead">' +
      lead +
      "</p>" +
      '<ul class="contato__list">' +
      "<li><strong>Portal CT (UFRJ)</strong> <a href=\"https://atendimento.ct.ufrj.br/\" target=\"_blank\" rel=\"noopener noreferrer\">atendimento.ct.ufrj.br</a></li>" +
      "<li><strong>E-mail</strong> <a href=\"mailto:" + email + "\">" + email + "</a></li>" +
      "<li><strong>Telefone</strong> <span>" + phone + "</span></li>" +
      "<li><strong>Local</strong> <span>Centro de Tecnologia (CT) — UFRJ</span></li>" +
      "</ul></div>" +
      '<div class="contato__form-wrap reveal" data-reveal data-reveal-delay="1">' +
      '<form class="contact-form" id="contact-form" novalidate>' +
      '<div class="form-group"><label for="contact-name">Nome</label>' +
      '<input type="text" id="contact-name" name="name" autocomplete="name" required placeholder="Seu nome completo" aria-describedby="err-name">' +
      '<span class="form-error" id="err-name" role="alert"></span></div>' +
      '<div class="form-group"><label for="contact-email">E-mail</label>' +
      '<input type="email" id="contact-email" name="email" autocomplete="email" required placeholder="seu@email.com" aria-describedby="err-email">' +
      '<span class="form-error" id="err-email" role="alert"></span></div>' +
      '<div class="form-group"><label for="contact-message">Mensagem</label>' +
      '<textarea id="contact-message" name="message" rows="5" required placeholder="Como podemos ajudar?" aria-describedby="err-message"></textarea>' +
      '<span class="form-error" id="err-message" role="alert"></span></div>' +
      '<p class="form-success" id="form-success" role="status" hidden>Mensagem válida! Em um site com backend, ela seria enviada agora.</p>' +
      '<button type="submit" class="btn btn--primary btn--block">Enviar mensagem</button>' +
      "</form></div></div>";
  }

  function getCmsSectionsMap(sections) {
    var map = {};
    if (!sections) return map;
    sections.forEach(function (s) {
      map[s.section_key] = s.content;
    });
    return map;
  }

  async function init() {
    var cfg = getPageConfig();
    var cmsMap = {};

    if (window.PACTCMS) {
      try {
        var data = await PACTCMS.load(PACTCMS.detectPageSlug());
        if (data && data.sections) cmsMap = getCmsSectionsMap(data.sections);
      } catch (e) {
        /* fallback HTML */
      }
    }

    renderNumeros(cfg, cmsMap.numeros);
    renderGaleriaPreview(cfg);
    renderRedes(cfg, cmsMap.redes);
    renderContato(cfg, cmsMap.contato);

    if (typeof window.initRevealOnScrollExternal === "function") {
      window.initRevealOnScrollExternal();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
