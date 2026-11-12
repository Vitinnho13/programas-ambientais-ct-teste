/**
 * ============================================
 * ReciclaCT — script.js
 * Interações: loader, menu, scroll, contadores,
 * validação de formulário, reveal, voltar ao topo
 * ============================================
 */

(function () {
  "use strict";

  /* --- Referências ao DOM --- */
  const pageLoader = document.getElementById("page-loader");
  const body = document.body;
  const header = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");
  const primaryNav = document.getElementById("primary-nav");
  const navLinks = primaryNav ? primaryNav.querySelectorAll(".nav-link") : [];
  const backToTop = document.getElementById("back-to-top");
  const footerYear = document.getElementById("footer-year");
  const contactForm = document.getElementById("contact-form");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /**
   * Esconde o loader após o carregamento completo da página.
   */
  function initLoader() {
    if (!pageLoader) return;

    const hide = function () {
      pageLoader.classList.add("is-hidden");
      body.classList.remove("is-loading");
      pageLoader.setAttribute("aria-hidden", "true");
    };

    body.classList.add("is-loading");

    if (document.readyState === "complete") {
      setTimeout(hide, 400);
    } else {
      window.addEventListener("load", function () {
        setTimeout(hide, 400);
      });
    }
  }

  /**
   * Navbar: fundo ao rolar + esconde ao descer, mostra ao subir.
   */
  function initHeaderScroll() {
    if (!header) return;

    const threshold = 40;
    const hideAfter = 100;
    let lastY = window.scrollY || 0;
    let ticking = false;

    function onScroll() {
      const y = window.scrollY || document.documentElement.scrollTop;
      header.classList.toggle("is-scrolled", y > threshold);

      if (y <= hideAfter) {
        header.classList.remove("site-header--hidden");
      } else if (y > lastY + 4) {
        header.classList.add("site-header--hidden");
      } else if (y < lastY - 4) {
        header.classList.remove("site-header--hidden");
      }

      lastY = y;
      ticking = false;
    }

    onScroll();
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(onScroll);
        }
      },
      { passive: true }
    );
  }

  /**
   * Menu mobile: abre/fecha e sincroniza ARIA.
   */
  function initMobileNav() {
    if (!navToggle || !header || !primaryNav) return;

    function setOpen(isOpen) {
      header.classList.toggle("nav-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação");
      body.style.overflow = isOpen ? "hidden" : "";
    }

    navToggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("nav-open"));
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 992) {
          setOpen(false);
        }
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 992) {
        setOpen(false);
      }
    });
  }

  /**
   * Scroll suave para âncoras (reforço além do CSS, para navegadores antigos).
   */
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;

      anchor.addEventListener("click", function (e) {
        const target = document.querySelector(id);
        if (!target) return;

        if (!prefersReducedMotion) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          history.pushState(null, "", id);
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  /**
   * Botão "voltar ao topo".
   */
  function initBackToTop() {
    if (!backToTop) return;

    function toggleVisibility() {
      const y = window.scrollY || document.documentElement.scrollTop;
      const show = y > 500;
      backToTop.hidden = !show;
      backToTop.classList.toggle("is-visible", show);
    }

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /**
   * Ano dinâmico no rodapé.
   */
  function initFooterYear() {
    if (footerYear) {
      footerYear.textContent = String(new Date().getFullYear());
    }
  }

  /**
   * Intersection Observer: elementos com [data-reveal] ganham .is-visible ao entrar na viewport.
   */
  function initRevealOnScroll() {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) return;

    if (prefersReducedMotion) {
      elements.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    const io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    elements.forEach(function (el) {
      /* Hero: animado separadamente após o load (evita depender só do observer) */
      if (el.closest(".hero")) return;
      io.observe(el);
    });

    /* Hero: entrada animada após o loader */
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.querySelectorAll(".hero .reveal").forEach(function (el) {
          el.classList.add("is-visible");
        });
      }, prefersReducedMotion ? 0 : 480);
    });
  }

  /**
   * Contadores animados na seção #numeros.
   */
  function initCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;

    const numerosSection = document.getElementById("numeros");
    if (!numerosSection) return;

    let animated = false;

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function animateValue(el, target, suffix, duration) {
      const start = 0;
      const startTime = performance.now();

      function frame(now) {
        const elapsed = now - startTime;
        const p = Math.min(1, elapsed / duration);
        const eased = easeOutQuart(p);
        const value = start + (target - start) * eased;
        const decimals = String(target).includes(".") ? 1 : 0;
        el.textContent = (decimals ? value.toFixed(1) : Math.floor(value)) + suffix;
        if (p < 1) {
          requestAnimationFrame(frame);
        } else {
          el.textContent = (Number.isInteger(target) ? target : target.toFixed(1)) + suffix;
        }
      }

      requestAnimationFrame(frame);
    }

    function run() {
      if (animated) return;
      animated = true;
      counters.forEach(function (el) {
        const target = Number(el.getAttribute("data-target")) || 0;
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = prefersReducedMotion ? 0 : 1600;
        if (prefersReducedMotion) {
          el.textContent = target + suffix;
        } else {
          el.textContent = "0" + suffix;
          animateValue(el, target, suffix, duration);
        }
      });
    }

    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(numerosSection);
  }

  /**
   * Validação do formulário de contato (client-side).
   */
  function initContactForm() {
    if (!contactForm) return;
  
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const messageInput = document.getElementById("contact-message");
  
    const errName = document.getElementById("err-name");
    const errEmail = document.getElementById("err-email");
    const errMessage = document.getElementById("err-message");
  
    function isValidEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
  
    contactForm.addEventListener("submit", function (e) {
      let valid = true;
  
      errName.textContent = "";
      errEmail.textContent = "";
      errMessage.textContent = "";
  
      if (nameInput.value.trim().length < 2) {
        errName.textContent = "Digite seu nome.";
        valid = false;
      }
  
      if (!isValidEmail(emailInput.value.trim())) {
        errEmail.textContent = "Digite um e-mail válido.";
        valid = false;
      }
  
      if (messageInput.value.trim().length < 3) {
        errMessage.textContent = "Digite uma mensagem.";
        valid = false;
      }
  
      if (!valid) {
        e.preventDefault();
      }
    });
  }

  /**
   * Destaca o item do menu conforme a seção visível (scroll spy simples).
   */
  function initNavScrollSpy() {
    const navLinks = document.querySelectorAll(".nav-link[data-nav]");
    if (!navLinks.length) return;

    const order = ["home", "sobre", "economia-circular", "objetivos", "projetos", "numeros", "galeria", "redes", "equipe", "contato"];

    function update() {
      const offset = header ? header.offsetHeight + 48 : 110;
      let current = "home";
      let closestTop = -Infinity;

      order.forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top <= offset && top > closestTop) {
          closestTop = top;
          current = id;
        }
      });

      navLinks.forEach(function (link) {
        const active = link.getAttribute("data-nav") === current;
        link.classList.toggle("nav-link--active", active);
      });
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  function updateGalleryCovers() {
    document.querySelectorAll("[data-category-cover]").forEach(function (img) {
      var category = img.getAttribute("data-category-cover");
      var saved = localStorage.getItem("pact_cover_" + category);
      if (saved) {
        img.src = saved;
      }
    });
  }

  function initApp() {
    initLoader();
    initHeaderScroll();
    initMobileNav();
    initNavScrollSpy();
    initSmoothAnchors();
    initBackToTop();
    initFooterYear();
    initRevealOnScroll();
    initCounters();
    initContactForm();
    updateGalleryCovers();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
    function initImageSlider() {
      const slides = document.querySelectorAll(".slide");
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
    
      if (!slides.length || !prevBtn || !nextBtn) return;
    
      let currentSlide = 0;
    
      function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
      }
    
      function changeSlide(direction) {
        currentSlide += direction;
    
        if (currentSlide < 0) {
          currentSlide = slides.length - 1;
        }
    
        if (currentSlide >= slides.length) {
          currentSlide = 0;
        }
    
        showSlide(currentSlide);
      }
    
      prevBtn.addEventListener("click", () => changeSlide(-1));
      nextBtn.addEventListener("click", () => changeSlide(1));
    
      showSlide(currentSlide);
    }initImageSlider();

  } initApp();
})();

    

