/**
 * Renderiza seções ricas dos programas a partir do CMS (timelines, ciclos, projetos…)
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

  function renderTimeline(items) {
    return (
      '<ol class="prog-timeline">' +
      items
        .map(function (it) {
          return (
            '<li class="prog-timeline__item reveal" data-reveal><span class="prog-timeline__year">' +
            esc(it.year) +
            '</span><div class="prog-timeline__body"><h3>' +
            esc(it.title) +
            "</h3><p>" +
            (it.html || esc(it.text)) +
            "</p></div></li>"
          );
        })
        .join("") +
      "</ol>"
    );
  }

  function renderObjList(items) {
    return (
      '<ul class="prog-checklist">' +
      items
        .map(function (t) {
          return "<li>" + (t.html || esc(t)) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  function renderProjectCards(projects) {
    return (
      '<div class="prog-projects">' +
      projects
        .map(function (p, i) {
          return (
            '<article class="prog-project-card reveal" data-reveal' +
            (i ? ' data-reveal-delay="' + (i % 3) + '"' : "") +
            '><div class="prog-project-card__icon" aria-hidden="true">' +
            (p.icon || "🌱") +
            "</div><h3>" +
            esc(p.title) +
            "</h3><p>" +
            (p.html || esc(p.text)) +
            "</p>" +
            (p.tips && p.tips.length
              ? '<ul class="prog-project-card__tips">' +
                p.tips.map(function (t) {
                  return "<li>" + (t.html || esc(t)) + "</li>";
                }).join("") +
                "</ul>"
              : "") +
            (p.myths && p.myths.length
              ? '<div class="prog-myth-grid">' +
                p.myths
                  .map(function (m) {
                    return (
                      '<div class="prog-myth"><span class="prog-myth__tag">' +
                      esc(m.tag) +
                      "</span><p>" +
                      (m.html || esc(m.text)) +
                      "</p></div>"
                    );
                  })
                  .join("") +
                "</div>"
              : "") +
            "</article>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderBenefits(cards) {
    return (
      '<div class="prog-benefits">' +
      cards
        .map(function (c) {
          return (
            '<div class="prog-benefit"><span class="prog-benefit__icon">' +
            (c.icon || "🌳") +
            "</span><h4>" +
            esc(c.title) +
            "</h4><p>" +
            esc(c.text) +
            "</p></div>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderCycle(steps, id) {
    var uid = id || "cycle-" + Math.random().toString(36).slice(2, 8);
    var nav =
      '<div class="prog-cycle__nav" role="tablist">' +
      steps
        .map(function (s, i) {
          return (
            '<button type="button" class="prog-cycle__step-btn' +
            (i === 0 ? " is-active" : "") +
            '" data-cycle="' +
            uid +
            '" data-step="' +
            i +
            '" role="tab">' +
            (s.icon || i + 1) +
            "</button>"
          );
        })
        .join("") +
      "</div>";
    var panels =
      '<div class="prog-cycle__panels">' +
      steps
        .map(function (s, i) {
          return (
            '<div class="prog-cycle__panel' +
            (i === 0 ? " is-active" : "") +
            '" data-cycle-panel="' +
            uid +
            '" data-step="' +
            i +
            '" role="tabpanel"><h3>' +
            esc(s.title) +
            "</h3><p>" +
            (s.html || esc(s.text)) +
            "</p></div>"
          );
        })
        .join("") +
      "</div>";
    return '<div class="prog-cycle" data-cycle-id="' + uid + '">' + nav + panels + "</div>";
  }

  function renderTeam(members) {
    return (
      '<div class="prog-team">' +
      members
        .map(function (m) {
          return (
            '<article class="prog-team__card"><h3>' +
            esc(m.name) +
            "</h3><p class='prog-team__role'>" +
            esc(m.role) +
            "</p><p>" +
            esc(m.bio) +
            "</p></article>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderRichSection(key, content) {
    if (!content) return "";
    var html = "";
    if (content.label || content.title) {
      html +=
        '<header class="section__header section__header--center reveal" data-reveal>' +
        (content.label ? '<span class="section__label">' + esc(content.label) + "</span>" : "") +
        (content.title ? '<h2 class="section__title">' + content.title + "</h2>" : "") +
        (content.intro ? '<p class="section__intro">' + (content.introHtml || esc(content.intro)) + "</p>" : "") +
        "</header>";
    }
    if (content.lead) html += '<p class="lead reveal" data-reveal>' + (content.leadHtml || content.lead) + "</p>";
    if (content.paragraphs) {
      html += content.paragraphs.map(function (p) {
        return '<p class="reveal" data-reveal>' + p + "</p>";
      }).join("");
    }
    if (content.objectives) html += renderObjList(content.objectives);
    if (content.timeline) html += renderTimeline(content.timeline);
    if (content.projects) html += renderProjectCards(content.projects);
    if (content.benefits) html += renderBenefits(content.benefits);
    if (content.cycle) html += renderCycle(content.cycle, key);
    if (content.team) html += renderTeam(content.team);
    if (content.items && !content.objectives) html += renderObjList(content.items);
    if (content.cta) {
      html +=
        '<p class="program-cta reveal" data-reveal"><a href="' +
        esc(content.cta.href) +
        '" class="btn btn--primary">' +
        esc(content.cta.text) +
        "</a></p>";
    }
    return html;
  }

  function bindCycles(root) {
    root.querySelectorAll(".prog-cycle__step-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var cycleId = btn.getAttribute("data-cycle");
        var step = btn.getAttribute("data-step");
        root.querySelectorAll('[data-cycle="' + cycleId + '"]').forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
        root.querySelectorAll('[data-cycle-panel="' + cycleId + '"]').forEach(function (p) {
          p.classList.toggle("is-active", p.getAttribute("data-step") === step);
        });
      });
    });
  }

  function applyRichSections(sections) {
    if (!sections) return;
    sections.forEach(function (section) {
      var slot = document.querySelector('[data-cms-slot="' + section.section_key + '"]');
      if (!slot) return;
      var content = section.content;
      if (!content || content._type !== "rich") return;
      slot.innerHTML = renderRichSection(section.section_key, content);
      bindCycles(slot);
    });
    if (typeof window.initRevealOnScrollExternal === "function") {
      window.initRevealOnScrollExternal();
    }
  }

  function sectionsFromRichMap(map, slug) {
    if (!map || !map[slug]) return [];
    return map[slug].map(function (s) {
      return { section_key: s.key, content: s.content };
    });
  }

  function initFallback() {
    var slug = document.body && document.body.getAttribute("data-cms-page");
    if (!slug) return;
    var map = typeof PROGRAM_RICH_CONTENT !== "undefined" ? PROGRAM_RICH_CONTENT : null;
    var sections = sectionsFromRichMap(map, slug);
    if (sections.length) applyRichSections(sections);
  }

  document.addEventListener("pact-cms-loaded", function (e) {
    var rich = (e.detail.sections || []).filter(function (s) {
      return s.content && s.content._type === "rich";
    });
    if (rich.length) applyRichSections(rich);
    else initFallback();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(function () {
        if (!document.querySelector(".prog-timeline, .prog-cycle")) initFallback();
      }, 800);
    });
  } else {
    setTimeout(function () {
      if (!document.querySelector(".prog-timeline, .prog-cycle")) initFallback();
    }, 800);
  }

  window.PACTProgramRich = { applyRichSections, renderRichSection, initFallback };
})();
