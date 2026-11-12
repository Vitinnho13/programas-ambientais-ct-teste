/**
 * CT Eletroeletrônicos — Recursos Interativos 2026
 * Controla: O Caminho do Eletroeletrônico, Simulador de Impacto Tecnológico e Banco de Componentes.
 */
(function () {
  "use strict";

  // 1. O Caminho do Eletroeletrônico (Fluxograma Dinâmico)
  const stepsReee = [
    { title: "1. Descarte no PEV", desc: "Você deposita celulares, mouses ou cabos antigos em um Ponto de Entrega Voluntária (PEV)." },
    { title: "2. Triagem e Triagem Técnica", desc: "A equipe coleta e encaminha para a Casamata, onde engenheiros avaliam a integridade do circuito." },
    { title: "3. Recondicionamento / Reparo", desc: "Equipamentos com defeitos simples são consertados e formatados de forma segura." },
    { title: "4. Doação e Inclusão Digital", desc: "Computadores recondicionados são doados a laboratórios acadêmicos e escolas públicas parceiras." },
    { title: "5. Desmontagem Ecológica", desc: "Itens sem conserto são desmontados. Placas, baterias e cabos são separados para reciclagem." },
    { title: "6. Reciclagem e Logística Reversa", desc: "Minerais raros e metais pesados são fundidos e retornam como matéria-prima para novos eletrônicos." }
  ];

  let currentReeeStep = 0;

  function initLogisticsFlow() {
    const titleEl = document.getElementById("reee-flow-title");
    const descEl = document.getElementById("reee-flow-desc");
    const dotsContainer = document.getElementById("reee-flow-dots");
    const prevBtn = document.getElementById("reee-flow-prev");
    const nextBtn = document.getElementById("reee-flow-next");

    if (!titleEl || !dotsContainer) return;

    dotsContainer.innerHTML = stepsReee.map((_, i) => `
      <button type="button" class="cycle-dot ${i === 0 ? 'is-active' : ''}" data-idx="${i}" aria-label="Passo ${i+1}"></button>
    `).join("");

    const dots = dotsContainer.querySelectorAll(".cycle-dot");

    function render(idx) {
      currentReeeStep = idx;
      const step = stepsReee[idx];

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
      nextBtn.disabled = idx === stepsReee.length - 1;
    }

    prevBtn.addEventListener("click", () => {
      if (currentReeeStep > 0) render(currentReeeStep - 1);
    });

    nextBtn.addEventListener("click", () => {
      if (currentReeeStep < stepsReee.length - 1) render(currentReeeStep + 1);
    });

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        render(parseInt(dot.getAttribute("data-idx")));
      });
    });

    render(0);
  }

  // 2. Simulador de Impacto Tecnológico
  const deviceImpactData = {
    celular: {
      gold: "0.03g",
      silver: "0.35g",
      copper: "15g",
      co2: "8.5 kg",
      dest: "Baterias de Lítio e circuitos integrados recuperados para fabricação de novas ligas de cobalto."
    },
    notebook: {
      gold: "0.22g",
      silver: "1.80g",
      copper: "240g",
      co2: "145 kg",
      dest: "Módulos de memória e fontes recondicionados. Carcaça de alumínio derretida para ligas secundárias."
    },
    monitor: {
      gold: "0.05g",
      silver: "0.50g",
      copper: "110g",
      co2: "62 kg",
      dest: "Vidros e painéis LCD descontaminados de mercúrio. Plásticos reciclados para gabinetes industriais."
    }
  };

  function initImpactSimulator() {
    const select = document.getElementById("impact-device-select");
    const outGold = document.getElementById("imp-gold");
    const outSilver = document.getElementById("imp-silver");
    const outCopper = document.getElementById("imp-copper");
    const outCo2 = document.getElementById("imp-co2");
    const outDest = document.getElementById("imp-dest");

    if (!select || !outGold) return;

    function update() {
      const type = select.value;
      const data = deviceImpactData[type];

      if (!data) return;

      outGold.textContent = data.gold;
      outSilver.textContent = data.silver;
      outCopper.textContent = data.copper;
      outCo2.textContent = data.co2;
      outDest.textContent = data.dest;
    }

    select.addEventListener("change", update);
    update();
  }

  // 3. Visualizador do Banco de Componentes
  const componentsStock = [
    { name: "Memória RAM DDR3 4GB", cat: "RAM", status: "Disponível", origin: "Bloco A (Decania)" },
    { name: "Fonte ATX 500W", cat: "Fonte", status: "Disponível", origin: "Bloco C (Coleta)" },
    { name: "Monitor LCD 19''", cat: "Monitor", status: "Disponível", origin: "Prefeitura Universitária" },
    { name: "Cabo de Alimentação Tripolar", cat: "Cabo", status: "Disponível", origin: "Bloco H" },
    { name: "Disco Rígido HD 500GB (Formatado)", cat: "Armazenamento", status: "Reservado", origin: "Bloco G" },
    { name: "Placa-mãe LGA 1155 (Funcional)", cat: "Placa-mãe", status: "Disponível", origin: "EPlan/CT" }
  ];

  function initComponentBank() {
    const tableBody = document.getElementById("stock-tbody");
    if (!tableBody) return;

    tableBody.innerHTML = componentsStock.map(item => `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td>${item.cat}</td>
        <td>${item.origin}</td>
        <td><span class="program-badge" style="background:${item.status === 'Disponível' ? 'rgba(46,139,87,0.1)' : 'rgba(245,130,32,0.1)'}; color:${item.status === 'Disponível' ? 'var(--color-green)' : 'var(--color-orange)'}; border:none;">${item.status}</span></td>
      </tr>
    `).join("");
  }

  // Inicialização Geral
  function initAll() {
    initLogisticsFlow();
    initImpactSimulator();
    initComponentBank();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
