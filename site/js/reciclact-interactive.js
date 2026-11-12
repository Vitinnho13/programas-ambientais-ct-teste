/**
 * ReciclaCT — Recursos Interativos 2026
 * Controla: O Caminho dos Resíduos (Simulador Animado), Calculadora de Impacto, Jogo de Descarte e Quiz.
 */
(function () {
  "use strict";

  // 1. O Caminho dos Resíduos (Vídeo/Ciclo Interativo Animado)
  const cycleSteps = [
    {
      title: "1. Descarte Correto",
      desc: "Você descarta o papel, plástico, metal ou vidro nos coletores coloridos espalhados pelo campus do CT.",
      emoji: "🚯",
      bgClass: "cycle-bg-1"
    },
    {
      title: "2. Coleta pela Equipe",
      desc: "A equipe de coleta e os catadores parceiros recolhem os resíduos dos coletores e dos departamentos.",
      emoji: "🏃‍♂️",
      bgClass: "cycle-bg-2"
    },
    {
      title: "3. Chegada na Triagem",
      desc: "Os materiais chegam ao Centro de Triagem (construído em 2010), onde são descarregados com segurança.",
      emoji: "🏢",
      bgClass: "cycle-bg-3"
    },
    {
      title: "4. Separação Fina",
      desc: "Os catadores separam manualmente os resíduos por tipo específico (PET verde, transparente, papelão, ferro, etc.).",
      emoji: "🔍",
      bgClass: "cycle-bg-4"
    },
    {
      title: "5. Prensagem e Pesagem",
      desc: "Depois de separados, os materiais são compactados em prensas hidráulicas formando fardos e são pesados.",
      emoji: "⚙️",
      bgClass: "cycle-bg-5"
    },
    {
      title: "6. Coleta pela Cooperativa",
      desc: "O caminhão da cooperativa vai até o Centro de Triagem recolher os fardos pesados e organizados.",
      emoji: "🚚",
      bgClass: "cycle-bg-6"
    },
    {
      title: "7. Destinação Industrial",
      desc: "Os materiais são vendidos para empresas recicladoras parceiras das cooperativas de catadores.",
      emoji: "🏭",
      bgClass: "cycle-bg-7"
    },
    {
      title: "8. Retorno ao Mercado",
      desc: "Os resíduos transformam-se em matéria-prima secundária e retornam ao mercado como novos produtos comerciais.",
      emoji: "🔄",
      bgClass: "cycle-bg-8"
    }
  ];

  let currentCycleStep = 0;

  function initCycleSlider() {
    const titleEl = document.getElementById("cycle-title");
    const descEl = document.getElementById("cycle-desc");
    const emojiEl = document.getElementById("cycle-emoji");
    const progressEl = document.getElementById("cycle-progress-bar");
    const prevBtn = document.getElementById("cycle-prev");
    const nextBtn = document.getElementById("cycle-next");
    const stepsDotContainer = document.getElementById("cycle-dots");

    if (!titleEl || !descEl || !emojiEl || !prevBtn || !nextBtn) return;

    // Criar bolinhas dos passos
    stepsDotContainer.innerHTML = cycleSteps.map((_, i) => `
      <button type="button" class="cycle-dot ${i === 0 ? 'is-active' : ''}" data-idx="${i}" aria-label="Ir para passo ${i+1}"></button>
    `).join("");

    const dots = stepsDotContainer.querySelectorAll(".cycle-dot");

    function renderStep(idx) {
      currentCycleStep = idx;
      const step = cycleSteps[idx];

      emojiEl.style.transform = "scale(0.3) rotate(-45deg)";
      emojiEl.style.opacity = 0;
      titleEl.style.opacity = 0;
      descEl.style.opacity = 0;

      setTimeout(() => {
        emojiEl.textContent = step.emoji;
        titleEl.textContent = step.title;
        descEl.textContent = step.desc;

        emojiEl.style.transform = "scale(1) rotate(0deg)";
        emojiEl.style.opacity = 1;
        titleEl.style.opacity = 1;
        descEl.style.opacity = 1;
      }, 150);

      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === idx);
      });

      // Progresso em porcentagem
      const percent = ((idx + 1) / cycleSteps.length) * 100;
      progressEl.style.width = percent + "%";

      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === cycleSteps.length - 1;
    }

    prevBtn.addEventListener("click", () => {
      if (currentCycleStep > 0) renderStep(currentCycleStep - 1);
    });

    nextBtn.addEventListener("click", () => {
      if (currentCycleStep < cycleSteps.length - 1) renderStep(currentCycleStep + 1);
    });

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        renderStep(parseInt(dot.getAttribute("data-idx")));
      });
    });

    renderStep(0);
  }

  // 2. Calculadora de Impacto Ambiental
  function initEnvironmentalCalculator() {
    const petInput = document.getElementById("calc-pet");
    const metalInput = document.getElementById("calc-metal");
    const paperInput = document.getElementById("calc-paper");

    const outTrees = document.getElementById("out-trees");
    const outWater = document.getElementById("out-water");
    const outEnergy = document.getElementById("out-energy");
    const outCO2 = document.getElementById("out-co2");

    if (!petInput || !outTrees) return;

    function calculate() {
      const pets = parseFloat(petInput.value) || 0;
      const metals = parseFloat(metalInput.value) || 0;
      const paperKg = parseFloat(paperInput.value) || 0;

      // Fatores de conversão ecológicos
      // Papel: 1 kg = 0.02 árvores, 26L água, 2.6 kWh
      // PET: 1 garrafa = 0.1 kWh energia, 0.5L água, 0.03 kg CO2
      // Metal: 1 latinha = 0.4 kWh energia, 0.2L água, 0.05 kg CO2

      const trees = paperKg * 0.02;
      const water = (paperKg * 26) + (pets * 0.5) + (metals * 0.2);
      const energy = (paperKg * 2.6) + (pets * 0.1) + (metals * 0.4);
      const co2 = (pets * 0.03) + (metals * 0.05) + (paperKg * 0.8); // 1kg papel reciclado evita ~0.8kg CO2

      outTrees.textContent = trees.toFixed(1);
      outWater.textContent = Math.round(water) + " L";
      outEnergy.textContent = energy.toFixed(1) + " kWh";
      outCO2.textContent = co2.toFixed(1) + " kg";
    }

    [petInput, metalInput, paperInput].forEach(inp => {
      inp.addEventListener("input", calculate);
    });

    calculate();
  }

  // 3. Jogo "Descarte Correto" (Sorting Mini-Game)
  const gameItems = [
    { name: "Garrafa PET", type: "plastico", emoji: "🍼" },
    { name: "Lata de Refrigerante", type: "metal", emoji: "🥫" },
    { name: "Caderno Velho", type: "papel", emoji: "📄" },
    { name: "Copo de Vidro quebrado", type: "vidro", emoji: "🍾" },
    { name: "Casca de Melancia", type: "organicos", emoji: "🍉" },
    { name: "Pilha Doméstica", type: "perigosos", emoji: "🔋" },
    { name: "Placa-mãe antiga", type: "reee", emoji: "💻" },
    { name: "Madeira de Pallet", type: "madeira", emoji: "🪵" },
    { name: "Gaze suja de sangue", type: "ambulatorios", emoji: "😷" },
    { name: "Papel Higiênico usado", type: "rejeito", emoji: "🧻" }
  ];

  let gameScore = 0;
  let gameTotal = 0;
  let currentItemIdx = 0;

  function initDescarteGame() {
    const itemEmoji = document.getElementById("game-item-emoji");
    const itemName = document.getElementById("game-item-name");
    const gameResult = document.getElementById("game-result-feedback");
    const scoreVal = document.getElementById("game-score-val");
    const totalVal = document.getElementById("game-total-val");
    const binButtons = document.querySelectorAll(".game-bin-btn");

    if (!itemEmoji || !binButtons.length) return;

    // Embaralha itens
    gameItems.sort(() => Math.random() - 0.5);

    function displayItem() {
      if (gameTotal >= 10) {
        itemName.textContent = "Fim de jogo!";
        itemEmoji.textContent = "🏆";
        gameResult.textContent = `Sua pontuação final foi de ${gameScore} de 10! Parabéns!`;
        gameResult.style.color = "var(--color-green)";
        binButtons.forEach(btn => btn.disabled = true);
        return;
      }

      const item = gameItems[currentItemIdx];
      itemEmoji.textContent = item.emoji;
      itemName.textContent = item.name;
      gameResult.textContent = "Escolha o coletor correto!";
      gameResult.style.color = "var(--color-gray)";
    }

    function checkAnswer(chosenType) {
      const item = gameItems[currentItemIdx];
      gameTotal++;
      totalVal.textContent = gameTotal;

      if (chosenType === item.type) {
        gameScore++;
        scoreVal.textContent = gameScore;
        gameResult.textContent = `✔ Correto! O item ${item.name} vai para o coletor de ${chosenType.toUpperCase()}.`;
        gameResult.style.color = "var(--color-green)";
      } else {
        gameResult.textContent = `❌ Incorreto. O item ${item.name} deve ir para o coletor de ${item.type.toUpperCase()}.`;
        gameResult.style.color = "#c62828";
      }

      currentItemIdx++;
      setTimeout(displayItem, 2000);
    }

    binButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-bin-type");
        checkAnswer(type);
      });
    });

    displayItem();
  }

  // Inicialização Geral
  function initAll() {
    initCycleSlider();
    initEnvironmentalCalculator();
    initDescarteGame();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
