/**
 * CT Resíduos Perigosos — Recursos Interativos 2026
 * Controla: O Caminho do Resíduo (Fluxo), Bolsa de Reagentes, Verificador de Compatibilidade e Guia de Acidentes.
 */
(function () {
  "use strict";

  // 1. O Caminho do Resíduo Perigoso (Fluxo Interativo)
  const stepsResiduos = [
    { title: "1. Geração no Lab", desc: "O resíduo químico, biológico ou hospitalar é gerado durante experimentos ou atendimentos." },
    { title: "2. Classificação NBR 10.004", desc: "O pesquisador identifica a classe (Classe I - Perigoso) e periculosidade (inflamável, corrosivo, tóxico)." },
    { title: "3. Acondicionamento Seguro", desc: "O material é guardado em recipientes compatíveis, vedados e etiquetados conforme a norma." },
    { title: "4. Solicitação Digital", desc: "O laboratório registra o resíduo no sistema digital para solicitar a coleta especializada." },
    { title: "5. Casamata de Resíduos", desc: "Os resíduos são levados para armazenamento temporário e seguro na Casamata do CT." },
    { title: "6. Transporte e Destinação", desc: "Uma empresa licenciada transporta os resíduos para incineração, coprocessamento ou aterro industrial Classe I." }
  ];

  let currentResiduoStep = 0;

  function initLogisticsFlow() {
    const titleEl = document.getElementById("res-flow-title");
    const descEl = document.getElementById("res-flow-desc");
    const dotsContainer = document.getElementById("res-flow-dots");
    const prevBtn = document.getElementById("res-flow-prev");
    const nextBtn = document.getElementById("res-flow-next");

    if (!titleEl || !dotsContainer) return;

    dotsContainer.innerHTML = stepsResiduos.map((_, i) => `
      <button type="button" class="cycle-dot ${i === 0 ? 'is-active' : ''}" data-idx="${i}" aria-label="Passo ${i+1}"></button>
    `).join("");

    const dots = dotsContainer.querySelectorAll(".cycle-dot");

    function render(idx) {
      currentResiduoStep = idx;
      const step = stepsResiduos[idx];

      titleEl.style.opacity = 0;
      descEl.style.opacity = 0;

      setTimeout(() => {
        titleEl.textContent = step.title;
        descEl.textContent = step.desc;
        titleEl.style.opacity = 1;
        descEl.style.opacity = 1;
      }, 150);

      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === idx);
      });

      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === stepsResiduos.length - 1;
    }

    prevBtn.addEventListener("click", () => {
      if (currentResiduoStep > 0) render(currentResiduoStep - 1);
    });

    nextBtn.addEventListener("click", () => {
      if (currentResiduoStep < stepsResiduos.length - 1) render(currentResiduoStep + 1);
    });

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        render(parseInt(dot.getAttribute("data-idx")));
      });
    });

    render(0);
  }

  // 2. Bolsa de Reagentes Químicos (Compartilhamento de Sobras)
  const reagentsStock = [
    { name: "Ácido Clorídrico PA 1L (Lacrado)", formula: "HCl", quantity: "1 Frasco", origin: "Lab de Catálise (IQ)" },
    { name: "Acetona PA 500mL (Aberto - 90%)", formula: "C3H6O", quantity: "1 Frasco", origin: "Lab de Polímeros (IMA)" },
    { name: "Cloreto de Sódio PA 1kg", formula: "NaCl", quantity: "2 Potes", origin: "Lab de Processos (EQ)" },
    { name: "Metanol Grau HPLC 1L (Lacrado)", formula: "CH3OH", quantity: "3 Frascos", origin: "Lab de Cromatografia (IQ)" }
  ];

  function initReagentsExchange() {
    const tableBody = document.getElementById("reagents-exchange-tbody");
    if (!tableBody) return;

    tableBody.innerHTML = reagentsStock.map(item => `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td><code>${item.formula}</code></td>
        <td>${item.quantity}</td>
        <td>${item.origin}</td>
        <td><button type="button" class="btn btn--outline" style="padding:0.35rem 0.75rem; font-size:0.8rem; border-color:var(--color-green); color:var(--color-green);" onclick="alert('Solicitação de reagente enviada para o laboratório de origem!')">Adotar</button></td>
      </tr>
    `).join("");
  }

  // 3. Verificador de Compatibilidade Química
  function initCompatibilityChecker() {
    const sub1 = document.getElementById("compat-sub1");
    const sub2 = document.getElementById("compat-sub2");
    const resultBox = document.getElementById("compat-result-box");

    if (!sub1 || !sub2 || !resultBox) return;

    function check() {
      const v1 = sub1.value;
      const v2 = sub2.value;

      resultBox.className = "compat-result";
      resultBox.style.display = "none";

      if (!v1 || !v2) return;

      // Logica de compatibilidade simplificada
      if (v1 === "ácido" && v2 === "base") {
        resultBox.textContent = "⚠️ Incompatível! Reação ácido-base exotérmica com forte liberação de calor e risco de projeção de líquidos.";
        resultBox.classList.add("compat-result--danger");
      } else if (v1 === "oxidante" && v2 === "solvente") {
        resultBox.textContent = "💥 Perigo Extremo! Risco iminente de explosão ou combustão espontânea (reação violenta de oxirredução).";
        resultBox.classList.add("compat-result--danger");
      } else if (v1 === "ácido" && v2 === "metal") {
        resultBox.textContent = "⚠️ Atenção! Ácidos fortes em contato com metais geram Gás Hidrogênio (altamente inflamável e explosivo).";
        resultBox.classList.add("compat-result--warning");
      } else if (v1 === "oxidante" && v2 === "metal") {
        resultBox.textContent = "⚠️ Atenção! Metais em pó ou raspas podem sofrer ignição rápida em contato com fortes oxidantes.";
        resultBox.classList.add("compat-result--warning");
      } else {
        resultBox.textContent = "✔ Compatível sob condições normais. Sempre consulte a FISPQ específica de cada produto químico antes de misturar resíduos.";
        resultBox.classList.add("compat-result--safe");
      }
    }

    sub1.addEventListener("change", check);
    sub2.addEventListener("change", check);
  }

  // 4. Guia de Acidentes e Emergências
  function initEmergencyGuide() {
    const buttons = document.querySelectorAll("[data-emerg-tab]");
    const texts = document.querySelectorAll("[data-emerg-text]");

    if (!buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-emerg-tab");
        buttons.forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        texts.forEach(t => {
          t.hidden = t.getAttribute("data-emerg-text") !== type;
        });
      });
    });
  }

  // Inicialização Geral
  function initAll() {
    initLogisticsFlow();
    initReagentsExchange();
    initCompatibilityChecker();
    initEmergencyGuide();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
