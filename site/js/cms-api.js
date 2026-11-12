/**
 * Cliente dos dados publicados na prévia estática.
 */
window.PACTCMS = (function () {
  const API = "api";
  let pageSlug = "index";
  let cache = null;

  function detectPageSlug() {
    const path = location.pathname.split("/").pop() || "index.html";
    const map = {
      "index.html": "index",
      "": "index",
      "reciclact.html": "reciclact",
      "ct-eficiente.html": "ct-eficiente",
      "ct-verde.html": "ct-verde",
      "ct-eletro.html": "ct-eletro",
      "ct-residuosperigosos.html": "ct-residuos",
    };
    return map[path] || document.body.getAttribute("data-cms-page") || "index";
  }

  async function fetchPage(slug) {
    try {
      const res = await fetch(API + "/content/pages/" + slug + ".json", {
        credentials: "include",
        cache: "no-store",
      });
      if (!res.ok) return null;
      return res.json();
    } catch (e) {
      return null;
    }
  }

  async function load(slug) {
    pageSlug = slug || detectPageSlug();
    cache = await fetchPage(pageSlug);
    return cache;
  }

  function getSection(key) {
    if (!cache || !cache.sections) return null;
    const s = cache.sections.find(function (x) { return x.section_key === key; });
    return s ? s.content : null;
  }

  return { load, getSection, detectPageSlug, get cache() { return cache; } };
})();
