/**
 * Renderiza conteúdo do CMS — index e páginas de programas
 */
(function () {
  "use strict";

  function setHtml(el, html) {
    if (!el || html === undefined || html === null) return el;

    var template = document.createElement("template");
    template.innerHTML = String(html);
    var children = Array.from(template.content.children);
    var hasOnlyWhitespaceAroundChildren = Array.from(template.content.childNodes).every(function (node) {
      return children.indexOf(node) !== -1 || (node.nodeType === 3 && !node.textContent.trim());
    });
    var inlineTextTarget = /^H[1-6]$/.test(el.tagName);
    var paragraphTextTarget = el.tagName === "P";

    if (
      hasOnlyWhitespaceAroundChildren &&
      children.length > 0 &&
      (paragraphTextTarget || inlineTextTarget) &&
      children.every(function (child) {
        return child.tagName === "P" || /^H[1-6]$/.test(child.tagName);
      })
    ) {
      html = children
        .map(function (child) { return child.innerHTML; })
        .join(inlineTextTarget ? "<br>" : "");
    } else if (paragraphTextTarget && children.length > 0) {
      var container = document.createElement("div");
      Array.from(el.attributes).forEach(function (attribute) {
        container.setAttribute(attribute.name, attribute.value);
      });
      el.replaceWith(container);
      el = container;
    }

    el.innerHTML = html;
    return el;
  }

  function setText(el, text) {
    if (el && text !== undefined && text !== null) {
      if (typeof text === "string" && text.includes("<")) setHtml(el, text);
      else el.textContent = text;
    }
  }

  function hasVisibleHtmlContent(html) {
    var value = String(html || "");
    return (
      /<(img|iframe|video)\b/i.test(value) ||
      value.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/gi, " ").trim().length > 0
    );
  }

  function q(root, sel) {
    return root ? root.querySelector(sel) : document.querySelector(sel);
  }

  function qa(root, sel) {
    return root ? Array.from(root.querySelectorAll(sel)) : Array.from(document.querySelectorAll(sel));
  }

  const RENDERERS = {
    hero: function (c, root) {
      setText(q(root, ".hero__badge"), c.badge);
      setHtml(q(root, "#hero-title, .hero__title"), c.title);
      setText(q(root, ".hero__tagline"), c.tagline);
      setText(q(root, ".hero__subtitle"), c.subtitle);
      if (c.backgroundImage) {
        var bg = q(root, ".hero__bg") || q(root.parentElement, ".hero__bg");
        if (bg) bg.style.backgroundImage = "url('" + c.backgroundImage + "')";
      }
      var p = q(root, ".hero__actions .btn--primary");
      var s = q(root, ".hero__actions .btn--outline");
      if (p && c.ctaPrimary) {
        p.textContent = c.ctaPrimary.text;
        if (c.ctaPrimary.href) p.href = c.ctaPrimary.href;
      }
      if (s && c.ctaSecondary) {
        s.textContent = c.ctaSecondary.text;
        if (c.ctaSecondary.href) s.href = c.ctaSecondary.href;
      }
    },

    eixos: function (c, root) {
      setHtml(q(root, "#eixos-title, .section__title"), c.title);
      setText(q(root, ".section__intro"), c.intro);
      if (c.cards) {
        qa(root, ".eixo-card").forEach(function (card, i) {
          if (!c.cards[i]) return;
          setText(card.querySelector(".eixo-card__title"), c.cards[i].title);
          setText(card.querySelector(".eixo-card__text"), c.cards[i].text);
        });
      }
    },

    sobre: function (c, root) {
      setText(q(root, ".benefits .section__label"), c.label);
      setHtml(q(root, "#sobre-title, .benefits__title"), c.title);
      setText(q(root, ".benefits__text"), c.text);
      var imgB = q(root, ".benefits__media img");
      if (imgB && c.imageBenefits) imgB.src = c.imageBenefits;
      setText(q(root, ".section__header .section__label"), c.quemSomosLabel);
      setHtml(q(root, ".section__header .section__title"), c.quemSomosTitle);
      var imgE = q(root, ".sobre__figure img, .sobre__media img");
      if (imgE && c.imageEquipe) imgE.src = c.imageEquipe;
      var lead = q(root, ".sobre__text .lead, .lead");
      if (lead && c.lead !== undefined && c.lead !== null) {
        lead = setHtml(lead, c.lead);
        lead.hidden = !hasVisibleHtmlContent(c.lead);
      }
      var para = q(root, ".sobre__text p:not(.lead)");
      if (para && c.paragraph !== undefined && c.paragraph !== null) {
        para = setHtml(para, c.paragraph);
        para.hidden = !hasVisibleHtmlContent(c.paragraph);
      }
      if (c.pillars) {
        qa(root, ".pillar-card").forEach(function (card, i) {
          if (!c.pillars[i]) return;
          setText(card.querySelector(".pillar-card__title"), c.pillars[i].title);
          setText(card.querySelector(".pillar-card__desc"), c.pillars[i].desc);
        });
      }
    },

    economia: function (c, root) {
      setText(q(root, ".section__label"), c.label);
      setHtml(q(root, "#economia-title, .section__title"), c.title);
      setText(q(root, ".section__intro"), c.intro);
      if (c.blocks) {
        qa(root, ".economia__block").forEach(function (block, i) {
          if (!c.blocks[i]) return;
          setText(block.querySelector(".economia__heading"), c.blocks[i].heading);
          var p = block.querySelector(".economia__content p");
          if (p) setHtml(p, c.blocks[i].text);
          var img = block.querySelector(".economia__media img");
          if (img && c.blocks[i].image) img.src = c.blocks[i].image;
        });
      }
      if (c.highlights) {
        qa(root, ".eco-highlight").forEach(function (h, i) {
          if (!c.highlights[i]) return;
          setText(h.querySelector(".eco-highlight__num"), c.highlights[i].num);
          setText(h.querySelector("h4"), c.highlights[i].title);
          setText(h.querySelector("p"), c.highlights[i].text);
        });
      }
    },

    objetivos: function (c, root) {
      setText(q(root, ".section__label"), c.label);
      setHtml(q(root, "#objetivos-title, .section__title"), c.title);
      if (c.cards) {
        qa(root, ".obj-card").forEach(function (card, i) {
          if (!c.cards[i]) return;
          setText(card.querySelector(".obj-card__title"), c.cards[i].title);
          setText(card.querySelector(".obj-card__desc"), c.cards[i].desc);
        });
      }
    },

    projetos: function (c, root) {
      setText(q(root, ".section__label"), c.label);
      setHtml(q(root, "#projetos-title, .section__title"), c.title);
      setText(q(root, ".section__intro"), c.intro);
      if (c.items) {
        qa(root, ".timeline__item").forEach(function (item, i) {
          if (!c.items[i]) return;
          var card = item.querySelector(".timeline__card");
          if (!card) return;
          var img = card.querySelector("img");
          if (img && c.items[i].image) img.src = c.items[i].image;
          setText(card.querySelector("h3"), c.items[i].title);
          setText(card.querySelector("p"), c.items[i].text);
        });
      }
    },

    numeros: function (c, root) {
      var scope = root.id === "numeros" || root.querySelector(".numeros__grid") ? root : document.getElementById("numeros") || root;
      setText(q(scope, ".section__label"), c.label);
      setHtml(q(scope, "#numeros-title, .section__title"), c.title);
      setText(q(scope, ".numeros__note"), c.note);
      if (c.counters) {
        qa(scope, ".numero-card").forEach(function (card, i) {
          if (!c.counters[i]) return;
          var val = card.querySelector("[data-counter], .numero-card__value");
          if (val) {
            val.setAttribute("data-target", c.counters[i].target);
            val.setAttribute("data-suffix", c.counters[i].suffix || "");
            val.textContent = "0";
          }
          setText(card.querySelector(".numero-card__label"), c.counters[i].label);
        });
        if (typeof window.initCountersExternal === "function") window.initCountersExternal();
        else if (typeof window.initRevealOnScrollExternal === "function") window.initRevealOnScrollExternal();
      }
      if (root.id === "shared-numeros" || root.querySelector("#shared-numeros")) {
        window.__pactCmsNumeros = c;
        document.dispatchEvent(new CustomEvent("pact-cms-numeros", { detail: c }));
      }
    },

    galeria: function (c, root) {
      setText(q(root, ".section__label"), c.label);
      setHtml(q(root, "#galeria-title, .section__title"), c.title);
      if (c.items) {
        qa(root, ".galeria__item").forEach(function (item, i) {
          if (!c.items[i]) return;
          var img = item.querySelector("img");
          if (img) {
            if (c.items[i].image) img.src = c.items[i].image;
            if (c.items[i].category) img.setAttribute("data-category-cover", c.items[i].category);
          }
          setText(item.querySelector(".galeria__caption"), c.items[i].caption);
          if (c.items[i].link) item.href = c.items[i].link;
        });
      }
      var more = q(root, ".galeria__more a");
      if (more && c.ctaText) more.textContent = c.ctaText;
      if (more && c.ctaLink) more.href = c.ctaLink;
    },

    redes: function (c, root) {
      setText(q(root, ".section__label"), c.label);
      setHtml(q(root, ".section__title"), c.title);
      setText(q(root, ".section__intro"), c.intro);
      if (c.cards) {
        qa(root, ".redes__card").forEach(function (card, i) {
          if (!c.cards[i]) return;
          setText(card.querySelector("strong"), c.cards[i].name);
          var span = card.querySelector("span");
          if (span) span.textContent = c.cards[i].handle;
          if (c.cards[i].url) card.href = c.cards[i].url;
        });
      }
      window.__pactCmsRedes = c;
      document.dispatchEvent(new CustomEvent("pact-cms-redes", { detail: c }));
    },

    equipe: function (c, root) {
      setText(q(root, ".section__label"), c.label);
      setHtml(q(root, "#equipe-title, .section__title"), c.title);
      setText(q(root, ".section__intro"), c.intro);
      if (c.members) {
        qa(root, ".team-card").forEach(function (card, i) {
          if (!c.members[i]) return;
          var m = c.members[i];
          var img = card.querySelector("img");
          if (img && m.photo) img.src = m.photo;
          setText(card.querySelector(".team-card__name"), m.name);
          setText(card.querySelector(".team-card__role"), m.role);
          setText(card.querySelector(".team-card__bio"), m.bio);
        });
      }
    },

    contato: function (c, root) {
      setText(q(root, ".section__label"), c.label);
      setHtml(q(root, "#contato-title, .section__title"), c.title);
      setText(q(root, ".contato__lead"), c.lead);
      var phone = q(root, '.contato__list a[href*="tel"], .contato__list a[href*="3938"]');
      if (phone && c.phone) {
        phone.textContent = c.phone;
        phone.href = "tel:" + c.phone.replace(/\D/g, "");
      }
      var email = q(root, '.contato__list a[href^="mailto"]');
      if (email && c.email) {
        email.textContent = c.email;
        email.href = "mailto:" + c.email;
      }
      var addr = q(root, ".contato__list li:nth-child(3) span, .contato__list li strong + span");
      if (addr && c.address) addr.textContent = c.address;
      window.__pactCmsContato = c;
      document.dispatchEvent(new CustomEvent("pact-cms-contato", { detail: c }));
    },

    footer: function (c) {
      setText(document.querySelector(".footer__tagline"), c.tagline);
    },

    resumo: function (c, root) {
      setText(q(root, ".section__label"), c.label);
      setHtml(q(root, ".section__title"), c.title);
      if (c.paragraphs) {
        var paras = qa(root, ".program-resumo__text p");
        c.paragraphs.forEach(function (html, i) {
          if (paras[i]) setHtml(paras[i], html);
        });
      }
      if (c.badges) {
        var meta = q(root, ".program-resumo__meta");
        if (meta) {
          meta.innerHTML = c.badges
            .map(function (b) {
              return '<span class="program-badge">' + b + "</span>";
            })
            .join("");
        }
      }
      if (c.slides) {
        var slider = q(root, ".slider");
        if (slider) {
          slider.innerHTML = c.slides
            .map(function (src, i) {
              return (
                '<img class="slide' +
                (i === 0 ? " active" : "") +
                '" src="' +
                src +
                '" alt="Cadeia de reciclagem ' +
                i +
                '">'
              );
            })
            .join("");
        }
      }
      var img = q(root, ".benefits__media img:not(.slide)");
      if (img && c.image) img.src = c.image;
    },

    coletores: function (c, root) {
      setText(q(root, ".section__label"), c.label);
      setHtml(q(root, ".section__title"), c.title);
      setText(q(root, ".section__intro"), c.intro);
    },

    acoes: function (c, root) {
      setText(q(root, ".section__label"), c.label);
      setHtml(q(root, ".section__title"), c.title);
      if (c.items) {
        var list = q(root, ".program-acoes__list");
        if (list) {
          list.innerHTML = c.items
            .map(function (item) {
              return "<li>" + item + "</li>";
            })
            .join("");
        }
      }
    },
  };

  function renderSection(section) {
    var key = section.section_key;
    var content = section.content;
    if (!content) return;

    var root = document.querySelector('[data-cms-section="' + key + '"]');
    if (!root && key === "numeros") root = document.getElementById("numeros");
    if (!root && key === "footer") {
      RENDERERS.footer(content);
      return;
    }
    if (!root) return;

    var fn = RENDERERS[key];
    if (fn) fn(content, root);
  }

  async function init() {
     try {
        if (!window.PACTCMS) {
          console.error("PACTCMS não encontrado");
          return;
        }
    
        var slug = PACTCMS.detectPageSlug();
        console.log("Slug detectado:", slug);
    
        var data = await PACTCMS.load(slug);
        console.log("CMS data:", data);
    
        if (!data || !data.sections) {
          console.error("CMS sem sections ou vazio:", data);
          return;
        }
    
        data.sections.forEach(renderSection);
    
        document.dispatchEvent(
          new CustomEvent("pact-cms-loaded", { detail: data })
        );
    
        console.log("CMS carregado com sucesso");
      } catch (err) {
        console.error("Erro no CMS init:", err);
      }
    }
  

  window.PACTCMSRender = {
    renderSection: renderSection,
    RENDERERS: RENDERERS
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
