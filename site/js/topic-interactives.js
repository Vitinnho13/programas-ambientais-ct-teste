/**
 * Templates HTML para interativos nas pÃ¡ginas de tÃ³pico
 */
(function () {
  "use strict";

  var templates = {
    "cycle-slider":
      '<div class="cycle-slider">' +
      '<div class="cycle-progress"><div class="cycle-progress-bar" id="cycle-progress-bar"></div></div>' +
      '<div class="cycle-display">' +
      '<div class="cycle-emoji" id="cycle-emoji">ðŸš¯</div>' +
      '<div class="cycle-content">' +
      '<h3 id="cycle-title" style="font-family:var(--font-display);font-size:1.6rem;margin-top:0;color:var(--color-green);">1. Descarte Correto</h3>' +
      '<p id="cycle-desc" style="margin:0.5rem 0 0;font-size:1rem;color:var(--color-gray);">VocÃª descarta corretamente o resÃ­duo nos coletores coloridos.</p>' +
      "</div></div>" +
      '<div class="cycle-dots" id="cycle-dots"></div>' +
      '<div class="cycle-controls">' +
      '<button type="button" class="btn btn--outline" id="cycle-prev" style="color:var(--color-black);border-color:var(--color-black);">â† Anterior</button>' +
      '<button type="button" class="btn btn--primary" id="cycle-next">PrÃ³ximo â†’</button>' +
      "</div></div>",

    "calc-impacto":
      '<div class="interactive-card calc-grid">' +
      '<div class="calc-inputs">' +
      '<h3 style="font-family:var(--font-display);font-size:1.5rem;margin-top:0;color:var(--color-green);">Sua ContribuiÃ§Ã£o Mensal</h3>' +
      '<div class="form-group"><label for="calc-pet">Garrafas PET (unidades):</label>' +
      '<input type="number" id="calc-pet" value="20" min="0" style="width:100%;padding:0.75rem;border:1px solid var(--color-border);border-radius:var(--radius-sm)"></div>' +
      '<div class="form-group"><label for="calc-metal">Latinhas de Metal (unidades):</label>' +
      '<input type="number" id="calc-metal" value="15" min="0" style="width:100%;padding:0.75rem;border:1px solid var(--color-border);border-radius:var(--radius-sm)"></div>' +
      '<div class="form-group"><label for="calc-paper">Papel / PapelÃ£o (kg):</label>' +
      '<input type="number" id="calc-paper" value="5" min="0" style="width:100%;padding:0.75rem;border:1px solid var(--color-border);border-radius:var(--radius-sm)"></div>' +
      "</div>" +
      '<div class="calc-outputs">' +
      '<h3 style="font-family:var(--font-display);font-size:1.5rem;margin-top:0;color:var(--color-orange);">Recursos Preservados</h3>' +
      '<div class="calc-output-item"><span style="font-size:2rem;">ðŸŒ³</span><div><div class="calc-output-item__val" id="out-trees">0</div><div class="calc-output-item__label">Ãrvores salvas</div></div></div>' +
      '<div class="calc-output-item"><span style="font-size:2rem;">ðŸ’§</span><div><div class="calc-output-item__val" id="out-water">0 L</div><div class="calc-output-item__label">Ãgua economizada</div></div></div>' +
      '<div class="calc-output-item"><span style="font-size:2rem;">âš¡</span><div><div class="calc-output-item__val" id="out-energy">0 kWh</div><div class="calc-output-item__label">Energia poupada</div></div></div>' +
      '<div class="calc-output-item"><span style="font-size:2rem;">ðŸŒ</span><div><div class="calc-output-item__val" id="out-co2">0 kg</div><div class="calc-output-item__label">COâ‚‚ evitado</div></div></div>' +
      "</div></div>",

    "game-descarte":
      '<div class="game-box">' +
      '<div class="game-stats">' +
      '<div class="game-score">PontuaÃ§Ã£o: <span id="game-score-val">0</span> / <span id="game-total-val">0</span></div>' +
      "<div>Etapa do Campus</div></div>" +
      '<div class="game-item-display">' +
      '<div class="game-item-display__emoji" id="game-item-emoji">ðŸ¼</div>' +
      '<div class="game-item-display__name" id="game-item-name">Garrafa PET</div></div>' +
      '<p id="game-result-feedback" style="font-weight:600;font-size:1.1rem;margin-bottom:2rem;min-height:1.5rem;">Escolha o coletor correspondente!</p>' +
      '<div class="game-bins">' +
      '<button type="button" class="game-bin-btn" data-bin-type="papel" style="--bin-color:#1e88e5">Papel</button>' +
      '<button type="button" class="game-bin-btn" data-bin-type="plastico" style="--bin-color:#e53935">PlÃ¡stico</button>' +
      '<button type="button" class="game-bin-btn" data-bin-type="vidro" style="--bin-color:#2e8b57">Vidro</button>' +
      '<button type="button" class="game-bin-btn" data-bin-type="metal" style="--bin-color:#fdd835;color:#333;">Metal</button>' +
      '<button type="button" class="game-bin-btn" data-bin-type="organicos" style="--bin-color:#8d6e63">OrgÃ¢nico</button>' +
      '<button type="button" class="game-bin-btn" data-bin-type="reee" style="--bin-color:#0f1f18">REEE</button>' +
      '<button type="button" class="game-bin-btn" data-bin-type="perigosos" style="--bin-color:#f58220">Perigosos</button>' +
      '<button type="button" class="game-bin-btn" data-bin-type="rejeito" style="--bin-color:#757575">Rejeito</button>' +
      "</div></div>",

    "coletores-carousel": 
      '<div class="coletores-container" style="position:relative; margin-top:2rem;">' +
  '<div class="carousel-area" id="carousel-area">' +
    '<div class="carousel-hover-zone zone-left" aria-hidden="true">&#10094;</div>' +
    '<div class="carousel-hover-zone zone-right" aria-hidden="true">&#10095;</div>' +
    '<div class="carousel-3d-wrapper" id="carousel-3d-wrapper">' +
      '<div class="collector-item" data-index="0" data-color="#111111" data-name="Madeira"><div class="collector-item__img-wrapper"><img src="images/madeira.png" alt="Coletor de Madeira"><div class="collector-item__shadow"></div></div></div>' +
      '<div class="collector-item" data-index="1" data-color="#f58220" data-name="Resíduos Perigosos"><div class="collector-item__img-wrapper"><img src="images/perigosos.png" alt="Coletor de Resíduos"><div class="collector-item__shadow"></div></div></div>' +
      '<div class="collector-item" data-index="2" data-color="#2e8b57" data-name="Vidro"><div class="collector-item__img-wrapper"><img src="images/vidro.png" alt="Coletor de Vidro"><div class="collector-item__shadow"></div></div></div>' +
      '<div class="collector-item" data-index="3" data-color="#e53935" data-name="Plástico"><div class="collector-item__img-wrapper"><img src="images/plastico.png" alt="Coletor de Plástico"><div class="collector-item__shadow"></div></div></div>' +
      '<div class="collector-item" data-index="4" data-color="#1e88e5" data-name="Papel"><div class="collector-item__img-wrapper"><img src="images/papel.png" alt="Coletor de Papel"><div class="collector-item__shadow"></div></div></div>' +
      '<div class="collector-item" data-index="5" data-color="#e0e0e0" data-name="Ambulatórios"><div class="collector-item__img-wrapper"><img src="images/ambulatorio.png" alt="Coletor Ambulatório"><div class="collector-item__shadow"></div></div></div>' +
      '<div class="collector-item" data-index="6" data-color="#ffeb3b" data-name="Metal"><div class="collector-item__img-wrapper"><img src="images/metal.png" alt="Coletor de Metal"><div class="collector-item__shadow"></div></div></div>' +
      '<div class="collector-item" data-index="7" data-color="#795548" data-name="Orgânico"><div class="collector-item__img-wrapper"><img src="images/organico.png" alt="Coletor Orgânico"><div class="collector-item__shadow"></div></div></div>' +
      '<div class="collector-item" data-index="8" data-color="#9e9e9e" data-name="Não Reciclável"><div class="collector-item__img-wrapper"><img src="images/nao-reciclavel.png" alt="Coletor Não Reciclável"><div class="collector-item__shadow"></div></div></div>' +
      '<div class="collector-item" data-index="9" data-color="#7e57c2" data-name="Eletrônicos"><div class="collector-item__img-wrapper"><img src="images/eletronicos.png" alt="Coletor Eletrônicos"><div class="collector-item__shadow"></div></div></div>' +
    '</div>' +
  '</div>' +
  '<div class="collector-info reveal" data-reveal id="collector-info">' +
    '<h3 class="collector-info__title" id="info-title">Selecione um coletor</h3>' +
    '<p class="collector-info__desc" id="info-desc">Clique em um dos coletores no carrossel acima para ver os detalhes do que pode ou não ser descartado nele.</p>' +
    '<div class="collector-info__grid">' +
      '<div class="info-list info-list--yes">' +
        '<h4><span aria-hidden="true">✅</span> Pode</h4>' +
        '<ul id="info-yes"></ul>' +
      '</div>' +
      '<div class="info-list info-list--no">' +
        '<h4><span aria-hidden="true">❌</span> Não Pode</h4>' +
        '<ul id="info-no"></ul>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</div>',

    "painel-verde":
      '<div class="indicadores-cards" style="margin-bottom:2rem;">' +
      '<div class="interactive-card" style="padding:1.5rem;text-align:center;"><p style="font-size:0.85rem;color:var(--color-gray);margin:0 0 0.5rem;">Temperatura</p><p class="sensor-card__val" id="sensor-temp" style="font-size:2rem;font-weight:700;margin:0;color:var(--color-orange);">--Â°C</p></div>' +
      '<div class="interactive-card" style="padding:1.5rem;text-align:center;"><p style="font-size:0.85rem;color:var(--color-gray);margin:0 0 0.5rem;">Umidade</p><p class="sensor-card__val" id="sensor-hum" style="font-size:2rem;font-weight:700;margin:0;color:var(--color-green);">--%</p></div>' +
      '<div class="interactive-card" style="padding:1.5rem;text-align:center;"><p style="font-size:0.85rem;color:var(--color-gray);margin:0 0 0.5rem;">COâ‚‚</p><p class="sensor-card__val" id="sensor-co2" style="font-size:2rem;font-weight:700;margin:0;color:var(--color-institutional);">-- ppm</p></div>' +
      "</div>",

    "simulador-eficiente":
      '<div class="interactive-card calc-grid">' +
      '<div class="calc-inputs">' +
      '<h3 style="font-family:var(--font-display);margin-top:0;">ParÃ¢metros</h3>' +
      '<div class="form-group"><label for="sim-people">Pessoas no prÃ©dio</label>' +
      '<input type="range" id="sim-people" min="10" max="2000" step="10" value="500">' +
      '<div class="range-slider__value" id="sim-people-val">500</div></div>' +
      '<div class="form-group"><label for="sim-hours">Horas de uso diÃ¡rio</label>' +
      '<input type="range" id="sim-hours" min="1" max="8" step="1" value="2">' +
      '<div class="range-slider__value" id="sim-hours-val">2h</div></div></div>' +
      '<div class="calc-outputs">' +
      '<div class="calc-output-item"><div class="calc-output-item__val" id="sim-out-kwh">0 kWh</div><div class="calc-output-item__label">Economia energÃ©tica</div></div>' +
      '<div class="calc-output-item"><div class="calc-output-item__val" id="sim-out-money">R$ 0,00</div><div class="calc-output-item__label">Economia financeira</div></div>' +
      '<div class="calc-output-item"><div class="calc-output-item__val" id="sim-out-co2">0 kg</div><div class="calc-output-item__label">COâ‚‚ evitado</div></div>' +
      "</div></div>",

    "quiz-eficiente":
      '<div class="quiz-box">' +
      '<div class="quiz-header"><span id="quiz-count">Pergunta 1</span></div>' +
      '<p class="quiz-question" id="quiz-q">Carregando pergunta...</p>' +
      '<div class="quiz-options" id="quiz-opts"></div>' +
      '<p class="quiz-feedback" id="quiz-feedback" style="display:none;"></p>' +
      '<button type="button" class="btn btn--primary btn--block" id="quiz-next" hidden>AvanÃ§ar</button></div>',

    "simulador-eletro":
      '<div class="interactive-card" style="padding:2rem;">' +
      '<label for="impact-device-select"><strong>Selecione o equipamento descartado:</strong></label>' +
      '<select id="impact-device-select" style="width:100%;padding:0.95rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:1rem;margin:0.75rem 0 1.5rem;">' +
      '<option value="smartphone">Smartphone</option><option value="notebook">Notebook</option><option value="monitor">Monitor</option><option value="impressora">Impressora</option></select>' +
      '<div class="calc-output-item"><div class="calc-output-item__val" id="impact-co2-val">â€”</div><div class="calc-output-item__label">COâ‚‚ evitado com reciclagem</div></div>' +
      '<div class="calc-output-item"><div class="calc-output-item__val" id="impact-gold-val">â€”</div><div class="calc-output-item__label">Ouro recuperÃ¡vel (mg)</div></div></div>',

    "quiz-residuos":
      '<div class="quiz-box">' +
      '<div class="quiz-header"><span id="quiz-count">Pergunta 1</span></div>' +
      '<p class="quiz-question" id="quiz-q">Carregando pergunta...</p>' +
      '<div class="quiz-options" id="quiz-opts"></div>' +
      '<p class="quiz-feedback" id="quiz-feedback" style="display:none;"></p>' +
      '<button type="button" class="btn btn--primary btn--block" id="quiz-next" hidden>AvanÃ§ar</button></div>',
  };

  window.TopicInteractives = {
    get: function (key) {
      return templates[key] || "";
    },
  };
})();
