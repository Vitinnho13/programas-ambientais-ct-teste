/**
 * Casamata digital — registro e solicitação de resíduos (localStorage).
 * data-casamata="reee" | "perigosos" no <body>
 */
(function () {
  "use strict";

  var STORAGE_KEY_PREFIX = "casamata_";

  var TYPES = {
    reee: [
      "Computador / notebook",
      "Monitor",
      "Impressora",
      "Celular / tablet",
      "Cabos e carregadores",
      "Baterias e pilhas",
      "Outros eletroeletrônicos",
    ],
    perigosos: [
      "Resíduo químico — corrosivo",
      "Resíduo químico — inflamável",
      "Resíduo químico — tóxico",
      "Óleo vegetal",
      "Lâmpadas fluorescentes",
      "Pilhas e baterias",
      "Outros — Classe I",
    ],
  };

  function getType() {
    return document.body.getAttribute("data-casamata") || "reee";
  }

  function storageKey() {
    return STORAGE_KEY_PREFIX + getType();
  }

  function loadEntries() {
    try {
      var raw = localStorage.getItem(storageKey());
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveEntries(list) {
    localStorage.setItem(storageKey(), JSON.stringify(list));
  }

  function uid() {
    return "c" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
    } catch (e) {
      return iso;
    }
  }

  function renderTypeOptions(select) {
    var types = TYPES[getType()] || TYPES.reee;
    select.innerHTML =
      '<option value="">Selecione o tipo</option>' +
      types.map(function (t) {
        return '<option value="' + escapeHtml(t) + '">' + escapeHtml(t) + "</option>";
      }).join("");
  }

  function getFormData(form) {
    return {
      id: uid(),
      modo: form.getAttribute("data-modo"),
      tipo: form.tipo.value.trim(),
      quantidade: form.quantidade.value.trim(),
      peso: form.peso.value.trim(),
      local: form.local.value.trim(),
      departamento: form.departamento.value.trim(),
      solicitante: form.solicitante.value.trim(),
      email: form.email.value.trim(),
      telefone: form.telefone.value.trim(),
      observacoes: form.observacoes.value.trim(),
      status: form.getAttribute("data-modo") === "solicitar" ? "Solicitação pendente" : "Disponível",
      criadoEm: new Date().toISOString(),
    };
  }

  function validateEntry(data) {
    if (!data.tipo) return "Informe o tipo de resíduo.";
    if (!data.local) return "Informe o local onde está o resíduo.";
    if (!data.solicitante) return "Informe o nome do solicitante.";
    if (!data.email && !data.telefone) return "Informe e-mail ou telefone para contato.";
    return "";
  }

  function updateStats(entries) {
    var el = document.getElementById("casamata-stats");
    if (!el) return;
    var disp = entries.filter(function (e) {
      return e.modo === "registrar";
    }).length;
    var sol = entries.filter(function (e) {
      return e.modo === "solicitar";
    }).length;
    var peso = entries.reduce(function (acc, e) {
      var p = parseFloat(String(e.peso).replace(",", "."));
      return acc + (isNaN(p) ? 0 : p);
    }, 0);
    el.innerHTML =
      '<div class="indicador-card"><span class="indicador-card__value">' +
      disp +
      '</span><span class="indicador-card__label">Resíduos registrados</span></div>' +
      '<div class="indicador-card"><span class="indicador-card__value">' +
      sol +
      '</span><span class="indicador-card__label">Solicitações de coleta</span></div>' +
      '<div class="indicador-card"><span class="indicador-card__value">' +
      (peso ? peso.toFixed(1) + " kg" : "—") +
      '</span><span class="indicador-card__label">Peso informado (total)</span></div>';
  }

  function renderList(entries) {
    var wrap = document.getElementById("casamata-list");
    if (!wrap) return;

    if (!entries.length) {
      wrap.innerHTML = '<p class="casamata-empty">Nenhum registro ainda. Use os formulários acima para registrar ou solicitar coleta.</p>';
      updateStats(entries);
      return;
    }

    var rows = entries
      .slice()
      .reverse()
      .map(function (e) {
        return (
          "<tr>" +
          "<td>" +
          escapeHtml(formatDate(e.criadoEm)) +
          "</td>" +
          "<td><span class=\"casamata-badge casamata-badge--" +
          (e.modo === "solicitar" ? "sol" : "reg") +
          '">' +
          (e.modo === "solicitar" ? "Solicitação" : "Registro") +
          "</span></td>" +
          "<td>" +
          escapeHtml(e.tipo) +
          "</td>" +
          "<td>" +
          escapeHtml(e.quantidade || "—") +
          "</td>" +
          "<td>" +
          escapeHtml(e.peso ? e.peso + " kg" : "—") +
          "</td>" +
          "<td>" +
          escapeHtml(e.local) +
          "</td>" +
          "<td>" +
          escapeHtml(e.departamento || "—") +
          "</td>" +
          "<td>" +
          escapeHtml(e.solicitante) +
          "</td>" +
          "<td>" +
          escapeHtml(e.status) +
          "</td>" +
          "</tr>"
        );
      })
      .join("");

    wrap.innerHTML =
      '<div class="indicadores-table-wrap"><table class="indicadores-table casamata-table">' +
      "<thead><tr>" +
      "<th>Data</th><th>Ação</th><th>Tipo</th><th>Qtd.</th><th>Peso</th><th>Local</th><th>Depto.</th><th>Contato</th><th>Status</th>" +
      "</tr></thead><tbody>" +
      rows +
      "</tbody></table></div>";

    updateStats(entries);
  }

  function bindForm(form, onSuccess) {
    var errEl = form.querySelector(".casamata-form__error");
    var okEl = form.querySelector(".casamata-form__success");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (errEl) errEl.textContent = "";
      if (okEl) okEl.hidden = true;

      var data = getFormData(form);
      var err = validateEntry(data);
      if (err) {
        if (errEl) errEl.textContent = err;
        return;
      }

      var list = loadEntries();
      list.push(data);
      saveEntries(list);
      form.reset();
      if (okEl) okEl.hidden = false;
      renderList(list);
      if (onSuccess) onSuccess();
    });
  }

  function initTabs() {
    var tabs = document.querySelectorAll("[data-casamata-tab]");
    var panels = document.querySelectorAll("[data-casamata-panel]");
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var id = tab.getAttribute("data-casamata-tab");
        tabs.forEach(function (t) {
          t.classList.toggle("is-active", t === tab);
          t.setAttribute("aria-selected", t === tab ? "true" : "false");
        });
        panels.forEach(function (p) {
          var show = p.getAttribute("data-casamata-panel") === id;
          p.hidden = !show;
          p.classList.toggle("is-active", show);
        });
      });
    });
  }

  function initClear() {
    var btn = document.getElementById("casamata-clear");
    if (!btn) return;
    btn.addEventListener("click", function () {
      if (confirm("Apagar todos os registros desta casamata? (apenas neste navegador)")) {
        saveEntries([]);
        renderList([]);
      }
    });
  }

  function init() {
    if (!document.getElementById("casamata-form-registrar") && !document.getElementById("casamata-list")) {
      return;
    }

    document.querySelectorAll(".casamata-form select[name=tipo]").forEach(renderTypeOptions);

    var formRegistrar = document.getElementById("casamata-form-registrar");
    var formSolicitar = document.getElementById("casamata-form-solicitar");
    if (formRegistrar) bindForm(formRegistrar);
    if (formSolicitar) bindForm(formSolicitar);

    initTabs();
    initClear();
    renderList(loadEntries());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
