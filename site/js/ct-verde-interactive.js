/**
 * CT Verde — Recursos Interativos 2026
 * Controla: Simulador de Sensores, Mitos x Verdades, Composta CT, Biodiversidade e Quiz Verde.
 */
(function () {
  "use strict";

  // 1. Simulador de Sensores em Tempo Real
  function initSensorDashboard() {
    const tempVal = document.getElementById("sensor-temp");
    const humVal = document.getElementById("sensor-hum");
    const co2Val = document.getElementById("sensor-co2");
    if (!tempVal || !humVal || !co2Val) return;

    function updateSensors() {
      // Simula pequenas flutuações realistas
      const baseTemp = 24.5;
      const baseHum = 65;
      const baseCo2 = 412; // ppm

      const randTemp = baseTemp + (Math.random() * 3 - 1.5);
      const randHum = Math.round(baseHum + (Math.random() * 8 - 4));
      const randCo2 = Math.round(baseCo2 + (Math.random() * 12 - 6));

      tempVal.textContent = randTemp.toFixed(1) + "°C";
      humVal.textContent = randHum + "%";
      co2Val.textContent = randCo2 + " ppm";
    }

    updateSensors();
    setInterval(updateSensors, 5000);
  }

  // 2. Mitos vs Verdades (Febre Amarela)
  function initMythTruth() {
    const cards = document.querySelectorAll(".myth-card--flip");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
      });
    });
  }

  // 3. Composta CT (Filtro interativo)
  function initCompostCT() {
    const listYes = document.getElementById("compost-yes-list");
    const listNo = document.getElementById("compost-no-list");
    if (!listYes || !listNo) return;

    const itemsYes = ["Cascas de frutas", "Restos de legumes", "Borra de café", "Folhas secas", "Serragem limpa", "Cascas de ovos"];
    const itemsNo = ["Plásticos", "Metais", "Vidros", "Produtos químicos", "Carne/ossos", "Fezes de animais"];

    listYes.innerHTML = itemsYes.map(item => `<li><span aria-hidden="true">✔</span> ${item}</li>`).join("");
    listNo.innerHTML = itemsNo.map(item => `<li><span aria-hidden="true">✘</span> ${item}</li>`).join("");
  }

  // 4. Inventário Digital da Biodiversidade
  const bioDatabase = {
    fauna: [
      { name: "Gambá-de-orelha-preta", sci: "Didelphis aurita", desc: "Animal silvestre protegido por lei. Controla insetos e escorpiões, não transmite febre amarela e é dócil.", icon: "🦝" },
      { name: "Bem-te-vi", sci: "Pitangus sulphuratus", desc: "Uma das aves mais populares do campus, famosa pelo seu canto característico. Alimenta-se de insetos e frutas.", icon: "🐦" },
      { name: "Abelha Jataí", sci: "Tetragonisca angustula", desc: "Polinizador nativo sem ferrão. Essencial para a reprodução de espécies vegetais locais.", icon: "🐝" },
      { name: "Sabiá-laranjeira", sci: "Turdus rufiventris", desc: "Ave símbolo do Brasil, canta melodiosamente no campus, principalmente nas primeiras horas do dia.", icon: "🐦" }
    ],
    flora: [
      { name: "Ipê-Amarelo", sci: "Handroanthus albus", desc: "Árvore nativa que floresce intensamente no inverno, atraindo diversos polinizadores.", icon: "🌳" },
      { name: "Pau-Brasil", sci: "Paubrasilia echinata", desc: "Espécie ameaçada e de grande importância histórica. Possui flores amarelas perfumadas.", icon: "🌱" },
      { name: "Quaresmeira", sci: "Pleroma granulosum", desc: "Destaca-se pela floração roxa abundante. Muito usada no projeto paisagístico do CT.", icon: "🌺" },
      { name: "Pitangueira", sci: "Eugenia uniflora", desc: "Frutífera nativa da Mata Atlântica. Suas folhas liberam aroma agradável e os frutos atraem pássaros.", icon: "🍒" }
    ]
  };

  function initBiodiversity() {
    const listWrap = document.getElementById("bio-list");
    const tabs = document.querySelectorAll("[data-bio-tab]");
    if (!listWrap || !tabs.length) return;

    function renderCategory(cat) {
      const items = bioDatabase[cat] || [];
      listWrap.style.opacity = 0;
      setTimeout(() => {
        listWrap.innerHTML = items.map(item => `
          <div class="diario-card reveal is-visible">
            <div class="diario-card__img-wrap">${item.icon}</div>
            <div class="diario-card__body">
              <h4 class="diario-card__title">${item.name}</h4>
              <p style="font-style:italic; font-size:0.85rem; margin-top:-0.25rem; color:var(--color-gray)">${item.sci}</p>
              <p class="diario-card__desc">${item.desc}</p>
            </div>
          </div>
        `).join("");
        listWrap.style.opacity = 1;
      }, 150);
    }

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("is-active"));
        tab.classList.add("is-active");
        renderCategory(tab.getAttribute("data-bio-tab"));
      });
    });

    renderCategory("fauna"); // default
  }

  // 5. Quiz Ambiental Verde
  const quizData = [
    {
      q: "O macaco Bugio transmite Febre Amarela diretamente aos humanos?",
      a: ["Sim, pela mordida.", "Não, ele é apenas uma vítima e sinalizador da doença.", "Sim, por contato com pelos."],
      c: 1,
      exp: "Os macacos são infectados pelos mesmos mosquitos que transmitem a febre amarela aos humanos. Eles são sentinelas importantes para a saúde pública."
    },
    {
      q: "Qual destes materiais NÃO deve ser colocado na composteira (Composta CT)?",
      a: ["Borra de café", "Cascas de vegetais", "Restos de carne ou plástico"],
      c: 2,
      exp: "Plásticos não se decompõem e carnes atraem animais indesejados (como ratos e baratas) além de gerar forte odor."
    },
    {
      q: "Os gambás encontrados no Centro de Tecnologia são perigosos?",
      a: ["Sim, são venenosos e atacam.", "Não, controlam pragas (escorpiões/insetos) e são protegidos por lei.", "Sim, transmitem febre amarela."],
      c: 1,
      exp: "Gambás são marsupiais benéficos que controlam insetos e escorpiões no campus. Não são venenosos e não transmitem febre amarela."
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  function initQuiz() {
    const qText = document.getElementById("quiz-q");
    const qOptions = document.getElementById("quiz-opts");
    const qCount = document.getElementById("quiz-count");
    const qFeedback = document.getElementById("quiz-feedback");
    const qNext = document.getElementById("quiz-next");
    if (!qText || !qOptions) return;

    function renderQuestion() {
      qFeedback.style.display = "none";
      qFeedback.textContent = "";
      qNext.hidden = true;

      const data = quizData[currentQuestion];
      qCount.textContent = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;
      qText.textContent = data.q;

      qOptions.innerHTML = data.a.map((opt, i) => `
        <button type="button" class="quiz-option" data-idx="${i}">${opt}</button>
      `).join("");

      qOptions.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => selectOption(parseInt(btn.getAttribute("data-idx"))));
      });
    }

    function selectOption(idx) {
      const data = quizData[currentQuestion];
      const buttons = qOptions.querySelectorAll(".quiz-option");

      buttons.forEach(btn => btn.disabled = true);

      if (idx === data.c) {
        score++;
        buttons[idx].classList.add("is-correct");
        qFeedback.textContent = "✔ Correto! " + data.exp;
        qFeedback.className = "quiz-feedback quiz-feedback--correct";
      } else {
        buttons[idx].classList.add("is-wrong");
        buttons[data.c].classList.add("is-correct");
        qFeedback.textContent = "❌ Incorreto. " + data.exp;
        qFeedback.className = "quiz-feedback quiz-feedback--wrong";
      }

      qFeedback.style.display = "block";
      qNext.hidden = false;
    }

    qNext.addEventListener("click", () => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        renderQuestion();
      } else {
        qCount.textContent = "Quiz Concluído!";
        qText.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
        qOptions.innerHTML = "";
        qFeedback.style.display = "none";
        qNext.hidden = true;
        // Botão para reiniciar
        const restartBtn = document.createElement("button");
        restartBtn.className = "btn btn--primary";
        restartBtn.textContent = "Reiniciar Quiz";
        restartBtn.addEventListener("click", () => {
          currentQuestion = 0;
          score = 0;
          renderQuestion();
        });
        qOptions.appendChild(restartBtn);
      }
    });

    renderQuestion();
  }

  // Inicialização Geral
  function initAll() {
    initSensorDashboard();
    initMythTruth();
    initCompostCT();
    initBiodiversity();
    initQuiz();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
