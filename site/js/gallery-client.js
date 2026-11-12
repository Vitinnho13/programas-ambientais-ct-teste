/**
 * Cliente somente leitura para as galerias da prévia estática.
 */
(function (global) {
  "use strict";

  async function getCategories() {
    try {
      var res = await fetch("api/gallery/categories.json");
      if (!res.ok) return null;
      var data = await res.json();
      return data.categories || [];
    } catch (e) {
      return null;
    }
  }

  async function getPhotos(slug) {
    try {
      var res = await fetch("api/gallery/" + encodeURIComponent(slug) + ".json");
      if (!res.ok) return null;
      var data = await res.json();
      return data.photos || [];
    } catch (e) {
      return null;
    }
  }

  global.PACTGallery = {
    hasServer: function () { return false; },
    getCategories: getCategories,
    getPhotos: getPhotos,
  };
})(window);
