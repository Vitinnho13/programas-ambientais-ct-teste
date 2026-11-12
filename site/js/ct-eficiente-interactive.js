/**
 * CT Eficiente — Recursos Interativos 2026
 * Controla: Caça ao Desperdício (Reportes), Simulador de Economia, Boas Práticas e Quiz Eficiente.
 */
(function () {
  "use strict";

  // 1. Caça ao Desperdício (Formulário de Reportes)
  function initReportForm() {
    const form = document.getElementById("report-desperdicio-form");
    const successMsg = document.getElementById("report-success");
    const errorMsg = document.getElementById("report-error");

    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (successMsg) successMsg.hidden = true;
      if (errorMsg) errorMsg.textContent = "";

      const tipo = form.tipoDesperdicio.value;
      const local = form.localDesperdicio.value.trim();
      const desc = form.descricaoDesperdicio.value.trim();

      if (!tipo) {
        errorMsg.textContent = "Selecione o tipo de ocorrência.";
        return;
      }
      if (!local) {
        errorMsg.textContent = "Informe o local exato.";
        return;
      }

      // Simula envio e gera protocolo
      const protocolo = "EFF" + Math.floor(100000 + Math.random() * 900000);
      successMsg.textContent = `✔ Ocorrência registrada com sucesso! Protocolo: ${protocolo}. Nossa equipe irá verificar o local.`;
      successMsg.hidden = false;
      form.reset();
    });
  }

  // 2. Simulador de Economia de Energia
  function initSavingsSimulator() {
    const rangePeople = document.getElementById("sim-people");
    const valPeople = document.getElementById("sim-people-val");
    const rangeHours = document.getElementById("sim-hours");
    const valHours = document.getElementById("sim-hours-val");

    const outKwh = document.getElementById("sim-out-kwh");
    const outMoney = document.getElementById("sim-out-money");
    const outCo2 = document.getElementById("sim-out-co2");

    if (!rangePeople || !outKwh) return;

    function update() {
      const people = parseInt(rangePeople.value);
      const hours = parseInt(rangeHours.value);

      valPeople.textContent = people;
      valHours.textContent = hours + "h";

      // Lâmpada incandescente antiga (60W) substituída por LED (9W) = 51W de economia por hora
      // Cálculo: watts economizados * horas * pessoas * 30 dias / 1000 (para kWh)
      const kwhSaved = (51 * hours * people * 30) / 1000;
      const moneySaved = kwhSaved * 0.95; // Tarifa média de R$ 0,95 por kWh
      const co2Saved = kwhSaved * 0.09;  // Fator de emissão nacional (~0.09 kg CO2/kWh)

      outKwh.textContent = kwhSaved.toFixed(1) + " kWh";
      outMoney.textContent = "R$ " + moneySaved.toFixed(2);
      outCo2.textContent = co2Saved.toFixed(1) + " kg";
    }

    rangePeople.addEventListener("input", update);
    rangeHours.addEventListener("input", update);
    update();
  }

  // 3. Abas de Boas Práticas
  function initPracticesTabs() {
    const buttons = document.querySelectorAll("[data-practice-tab]");
    const panels = document.querySelectorAll("[data-practice-panel]");

    if (!buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-practice-tab");
        buttons.forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        panels.forEach(p => {
          p.hidden = p.getAttribute("data-practice-panel") !== id;
        });
      });
    });
  }

  // 4. Quiz CT Eficiente
  const quizData = [
    {
      q: "Qual tecnologia de iluminação apresenta o menor consumo de energia e maior durabilidade?",
      a: ["Incandescente", "Fluorescente compacta", "Lâmpada LED"],
      c: 2,
      exp: "As lâmpadas LED consomem até 80% menos que as incandescentes e duram até 25 vezes mais."
    },
    {
      q: "Uma torneira pingando no banheiro do bloco pode desperdiçar até quantos litros por dia?",
      a: ["10 litros", "46 litros", "100 litros"],
      c: 1,
      exp: "Um gotejamento lento pode desperdiçar cerca de 46 litros de água tratada por dia. Vazamentos devem ser reportados imediatamente."
    },
    {
      q: "Aparelhos em stand-by (modo espera) representam desperdício de energia?",
      a: ["Não, o consumo é nulo.", "Sim, podem representar de 5% a 12% do consumo elétrico.", "Apenas se estiverem aquecidos."],
      c: 1,
      exp: "O modo stand-by mantém circuitos energizados e pode representar uma parcela expressiva da conta de energia de salas e laboratórios."
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
    initReportForm();
    initSavingsSimulator();
    initPracticesTabs();
    initQuiz();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
