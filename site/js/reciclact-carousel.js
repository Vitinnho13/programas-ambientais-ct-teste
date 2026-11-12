/**
 * ReciclaCT — Carrossel Interativo 3D de Coletores
 * Controla a rotação tridimensional dos coletores com base no movimento do mouse
 * e exibe as informações detalhadas de descarte para o coletor selecionado.
 */
(function () {
  "use strict";

  // Dados detalhados de descarte para os 10 coletores (fallback offline)
  let collectorData = [
    {
      name: "Madeira",
      color: "#111111",
      description: "Destinado à reciclagem e reaproveitamento de sobras de madeira geradas em obras, oficinas ou embalagens no campus do CT.",
      yes: [
        "Paletes e caixas de engradado de frutas",
        "Retalhos de madeira sem tratamento químico",
        "Galhos secos e restos de poda de árvores",
        "Móveis antigos de madeira desmontados (sem ferragens)"
      ],
      no: [
        "Madeira tratada com vernizes tóxicos ou impermeabilizantes",
        "Placas de aglomerado ou MDF impregnadas com resinas sintéticas",
        "Madeira com pregos grandes ou dobradiças metálicas presas"
      ]
    },
    {
      name: "Resíduos Perigosos",
      color: "#f58220",
      description: "Espaço reservado para descarte controlado de materiais nocivos à saúde e ao meio ambiente. Requer encaminhamento especial para descontaminação.",
      yes: [
        "Pilhas domésticas (alcalinas e comuns)",
        "Baterias de eletrônicos, notebooks e celulares",
        "Lâmpadas fluorescentes inteiras",
        "Embalagens vazias de óleos lubrificantes ou tintas"
      ],
      no: [
        "Lixo comum ou resíduos recicláveis secos tradicionais",
        "Lâmpadas fluorescentes quebradas (risco de contaminação por mercúrio)",
        "Reagentes químicos e resíduos laboratoriais perigosos"
      ]
    },
    {
      name: "Vidro",
      color: "#2e8b57",
      description: "O vidro é 100% reciclável e pode ser fundido infinitas vezes sem perder a qualidade. Descarte apenas vidros limpos e secos.",
      yes: [
        "Garrafas de vidro de bebidas ou azeites",
        "Potes de conserva de vidro vazios",
        "Copos de vidro comuns quebrados ou inteiros",
        "Frascos de vidro vazios de perfumes e medicamentos"
      ],
      no: [
        "Vidros planos de janelas e para-brisas de automóveis",
        "Espelhos, cerâmicas, porcelanas e pirex (resistentes ao calor)",
        "Lâmpadas incandescentes ou fluorescentes",
        "Tubos de imagem de monitores antigos"
      ]
    },
    {
      name: "Plástico",
      color: "#e53935",
      description: "Recipientes plásticos de todos os tipos. Certifique-se de retirar resíduos de alimentos das embalagens para não contaminar o lote.",
      yes: [
        "Garrafas PET de refrigerante, suco e água",
        "Embalagens plásticas de cosméticos, xampus e material de limpeza",
        "Sacolas de plástico, copos descartáveis e tampas de garrafa",
        "Potes de alimentos e frascos de detergente"
      ],
      no: [
        "Embalagens plásticas metalizadas (como as de salgadinho e biscoito)",
        "Tomadas, cabos de panela e plásticos termofixos",
        "Fraldas descartáveis, adesivos e fitas adesivas",
        "Plásticos contendo resíduos químicos de laboratório"
      ]
    },
    {
      name: "Papel",
      color: "#1e88e5",
      description: "Papéis e papelões limpos e secos. Evite amassar excessivamente os papéis de escritório para facilitar o processo de triagem.",
      yes: [
        "Caixas de papelão ondulado desmontadas",
        "Jornais, revistas, panfletos e folhas de caderno",
        "Papel de escritório usado (impressos, rascunhos) e envelopes",
        "Caixas de papel cartão e sacos de papel limpos",
        "Embalagens longa vida (Tetrapak - leite, suco)"
      ],
      no: [
        "Papel carbono, papel térmico (extratos bancários) e papel celofane",
        "Papel higiênico, guardanapos e lenços de papel usados ou engordurados",
        "Papéis plastificados, metalizados ou com excesso de fita adesiva",
        "Fotografias e etiquetas adesivas"
      ]
    },
    {
      name: "Ambulatórios",
      color: "#9e9e9e",
      description: "Resíduos gerados em atendimentos de primeiros socorros ou serviços de saúde do campus. Apresentam risco biológico e requerem coleta dedicada.",
      yes: [
        "Curativos, gazes e algodão com resquício de sangue ou secreções",
        "Luvas cirúrgicas descartáveis e masks de proteção facial",
        "Seringas descartáveis vazias (sem agulha)",
        "Outros materiais descartáveis de enfermaria contaminados"
      ],
      no: [
        "Agulhas e objetos perfurocortantes soltos (descartar em caixas rígidas Descarpack)",
        "Embalagens de papel limpas de medicamentos (podem ir no papel)",
        "Sobras de medicamentos vencidos (entregar em pontos de coleta específicos)"
      ]
    },
    {
      name: "Tóxicos",
      color: "#7b1fa2",
      description: "Resíduos químicos perigosos gerados em atividades de pesquisa, ensino e análises laboratoriais nos institutos e departamentos do CT.",
      yes: [
        "Reagentes químicos inservíveis e soluções de laboratório neutralizadas",
        "Panos, papéis de filtro e luvas contaminados por substâncias químicas",
        "Frascos de vidro ou plástico vazios que continham produtos químicos nocivos",
        "Resíduos orgânicos halogenados e solventes inflamáveis"
      ],
      no: [
        "Lixo comum administrativo ou papéis de rascunho sem contaminação",
        "Resíduos infectantes ou biológicos de saúde (coletor ambulatorial)",
        "Vidrarias limpas quebradas (descartar em vidro convencional se descontaminado)"
      ]
    },
    {
      name: "Orgânicos",
      color: "#8d6e63",
      description: "Resíduos biodegradáveis que podem ser compostados para se transformarem em adubo orgânico rico em nutrientes para hortas e jardins do CT.",
      yes: [
        "Cascas de frutas, verduras, legumes e cascas de ovos",
        "Restos de refeições (sobras de pratos sem embalagem)",
        "Borra de café com filtro de papel e saquinhos de chá",
        "Folhas secas, flores, serragem de madeira limpa e aparas de grama"
      ],
      no: [
        "Embalagens plásticas, metálicas ou de vidro",
        "Fezes de animais domésticos (podem conter patógenos)",
        "Ossos grandes e carnes em excesso (geram odores fortes e atraem vetores)",
        "Óleos de cozinha usados (devem ser destinados à reciclagem específica)"
      ]
    },
    {
      name: "Não Reciclável",
      color: "#757575",
      description: "Materiais que não possuem tecnologia economicamente viável para reciclagem ou que estão sujos por resíduos orgânicos ou corporais.",
      yes: [
        "Papel higiênico, lenços de papel e guardanapos usados",
        "Bitucas de cigarro apagadas",
        "Esponjas de prato sintéticas usadas",
        "Cerâmicas, porcelanas quebradas e espelhos",
        "Fitas adesivas, etiquetas e fotografias velhas"
      ],
      no: [
        "Garrafas plásticas limpas, latinhas de metal e caixas de papelão",
        "Pilhas, baterias e lâmpadas fluorescentes (resíduos perigosos)",
        "Restos de comida compostáveis"
      ]
    },
    {
      name: "Metal",
      color: "#fbc02d",
      description: "Metais ferrosos e não ferrosos. Lave levemente as latinhas para evitar mau cheiro e proliferação de insetos no local de armazenamento.",
      yes: [
        "Latinhas de cerveja, refrigerante e sucos (alumínio)",
        "Latas de conserva (aço - milho, ervilha, sardinha, molho)",
        "Tampas metálicas de potes de vidro e tampinhas de garrafa",
        "Papel alumínio limpo, clipes, pregos, parafusos e arames"
      ],
      no: [
        "Latas de tinta, solventes ou vernizes vazias",
        "Latas de aerossol com pressão residual (desodorantes)",
        "Pilhas e baterias de qualquer tipo (são resíduos perigosos)",
        "Esponjas de aço usadas (tipo Bombril)"
      ]
    }
  ];

  // Elementos do DOM
  const carouselArea = document.getElementById("carousel-area");
  const wrapper = document.getElementById("carousel-3d-wrapper");
  const items = wrapper ? Array.from(wrapper.querySelectorAll(".collector-item")) : [];
  const panel = document.getElementById("collector-info-panel");
  const infoCard = document.getElementById("collector-info-card");
  const infoBadge = document.getElementById("info-color-badge");
  const infoTitle = document.getElementById("info-title");
  const infoDesc = document.getElementById("info-desc");
  const infoItemsContainer = document.getElementById("info-items-list-container");
  const infoItemsYes = document.getElementById("info-items-yes");
  const infoItemsNo = document.getElementById("info-items-no");

  if (!carouselArea || !wrapper || !items.length) return;

  const numItems = items.length;
  const angleStep = 360 / numItems;

  // Variáveis físicas e de rotação
  let currentAngle = 0;
  let targetAngle = 0;
  let activeIndex = -1;
  let isMouseOver = false;
  let maxSpeed = 1.6;
  let spinSpeed = 0;
  let hasClicked = false; // Controla se a caixa explicativa já foi revelada

  // Dimensões do elipsoide 3D (ampliado para ocupar todo o espaço)
  let rx, ry, rz;

  function updateDimensions() {
    const width = window.innerWidth;
    if (width > 992) {
      rx = 340; // Aumentado de 220 para 340 (aproveita o espaço)
      ry = 42;  
      rz = 200; // Aumentado de 150 para 200
    } else if (width > 576) {
      rx = 220; // Aumentado de 140 para 220
      ry = 28;
      rz = 130; // Aumentado de 100 para 130
    } else {
      rx = 130; // Aumentado de 90 para 130
      ry = 18;
      rz = 80;  // Aumentado de 65 para 80
    }
  }

  // Preenche a lista do painel lateral com efeito de transição
  function updateInfoPanel(index) {
    if (index === activeIndex) return;
    activeIndex = index;

    const data = collectorData[index];
    if (!data) return;

    // Atualiza tema do painel
    infoCard.style.setProperty("--collector-theme-color", data.color);
    infoBadge.style.backgroundColor = data.color;

    // Animação de fade do conteúdo
    infoTitle.style.opacity = 0;
    infoDesc.style.opacity = 0;
    infoItemsContainer.style.opacity = 0;

    setTimeout(() => {
      infoTitle.textContent = data.name;
      infoDesc.textContent = data.description;

      // Limpa e reconstrói listas de "Sim" e "Não"
      infoItemsYes.innerHTML = "";
      data.yes.forEach((itemText) => {
        const li = document.createElement("li");
        li.textContent = itemText;
        infoItemsYes.appendChild(li);
      });

      infoItemsNo.innerHTML = "";
      data.no.forEach((itemText) => {
        const li = document.createElement("li");
        li.textContent = itemText;
        infoItemsNo.appendChild(li);
      });

      infoItemsContainer.style.display = "flex";

      // Fade in de volta
      infoTitle.style.opacity = 1;
      infoDesc.style.opacity = 1;
      infoItemsContainer.style.opacity = 1;
    }, 150);
  }

  // Loop principal de renderização do carrossel 3D (física e interpolação)
  function renderLoop() {
    // Se o mouse estiver sobre o carrossel, atualiza o targetAngle baseado na velocidade do hover
    if (isMouseOver) {
      targetAngle += spinSpeed;
    }

    // Interpolação suave (inertia)
    currentAngle += (targetAngle - currentAngle) * 0.12;

    // Posiciona cada item no espaço 3D
    items.forEach((item, idx) => {
      const baseAngle = idx * angleStep;
      // Ângulo final em radianos
      const angleRad = (((currentAngle + baseAngle) % 360) * Math.PI) / 180;

      // Coordenadas cartesianas com base no ângulo e elipsoide
      const x = Math.sin(angleRad) * rx;
      const y = Math.cos(angleRad) * ry; 
      const z = Math.cos(angleRad) * rz; 

      // Fator de escala: 1.0 na frente (Z máximo), 0.65 atrás (Z mínimo)
      const scale = 0.65 + 0.35 * ((z + rz) / (2 * rz));

      // Z-index de sobreposição: quanto maior o Z, mais à frente
      const zIndex = Math.round((z + rz) * 100);

      // Aplica transformações tridimensionais
      item.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, ${z.toFixed(2)}px) scale(${scale.toFixed(3)})`;
      item.style.zIndex = zIndex;

      // Ajusta opacidade das latas traseiras para profundidade visual
      const opacity = 0.45 + 0.55 * ((z + rz) / (2 * rz));
      item.style.opacity = opacity.toFixed(2);
    });

    // Identifica o coletor que está mais próximo da frente (Z máximo)
    let closestIndex = -1;
    let maxZ = -Infinity;

    items.forEach((item, idx) => {
      const baseAngle = idx * angleStep;
      const angleRad = (((currentAngle + baseAngle) % 360) * Math.PI) / 180;
      const z = Math.cos(angleRad) * rz;
      if (z > maxZ) {
        maxZ = z;
        closestIndex = idx;
      }
    });

    // Atualiza o estado ativo no HTML
    items.forEach((item, idx) => {
      if (idx === closestIndex) {
        item.classList.add("is-active");
      } else {
        item.classList.remove("is-active");
      }
    });

    // Só atualiza as informações e exibe o painel se já ocorreu um clique
    if (closestIndex !== -1 && hasClicked) {
      updateInfoPanel(closestIndex);
    }

    requestAnimationFrame(renderLoop);
  }

  // Configuração dos Event Listeners de controle
  function initEvents() {
    // Rastreia mouse sobre a área do carrossel para girar
    carouselArea.addEventListener("mouseenter", () => {
      isMouseOver = true;
    });

    carouselArea.addEventListener("mousemove", (e) => {
      const rect = carouselArea.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const centerX = rect.width / 2;
      // dx varia de -1 (borda esquerda) a 1 (borda direita)
      const dx = (x - centerX) / centerX;

      // Zona morta de 15% no centro
      if (Math.abs(dx) > 0.15) {
        const sign = dx > 0 ? 1 : -1;
        // Fator de aceleração proporcional à distância das bordas
        const factor = (Math.abs(dx) - 0.15) / 0.85;
        spinSpeed = sign * factor * maxSpeed;

        // Modifica cursor para setas indicativas de rolagem
        carouselArea.style.cursor = dx > 0 ? "e-resize" : "w-resize";
      } else {
        spinSpeed = 0;
        carouselArea.style.cursor = "default";
      }
    });

    carouselArea.addEventListener("mouseleave", () => {
      isMouseOver = false;
      spinSpeed = 0;
      carouselArea.style.cursor = "default";

      // Efeito SNAP: Alinha perfeitamente ao coletor mais próximo ao remover o mouse
      targetAngle = Math.round(targetAngle / angleStep) * angleStep;
    });

    // Suporte a gestos touch em dispositivos móveis
    let touchStartX = 0;
    let touchStartAngle = 0;

    carouselArea.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartAngle = targetAngle;
      isMouseOver = false;
    }, { passive: true });

    carouselArea.addEventListener("touchmove", (e) => {
      const touchX = e.touches[0].clientX;
      const diffX = touchX - touchStartX;
      
      const sensitivity = 0.5;
      targetAngle = touchStartAngle - diffX * sensitivity;
    }, { passive: true });

    carouselArea.addEventListener("touchend", () => {
      targetAngle = Math.round(targetAngle / angleStep) * angleStep;
    }, { passive: true });

    // Permite selecionar um coletor clicando diretamente nele
    items.forEach((item, idx) => {
      item.addEventListener("click", () => {
        // Ativa o painel de informações na primeira interação
        if (!hasClicked) {
          hasClicked = true;
          panel.classList.add("is-visible");
        }

        const itemAngle = -idx * angleStep;
        // Calcula o menor caminho de rotação para colocar o item na frente
        const diff = ((((itemAngle - targetAngle) % 360) + 540) % 360) - 180;
        targetAngle += diff;
      });
    });

    // Escuta redimensionamento da janela
    window.addEventListener("resize", () => {
      updateDimensions();
    });
  }

  // Inicialização do módulo
  async function loadCollectorsFromApi() {
    try {
      var res = await fetch("api/collectors.json");
      if (!res.ok) return;
      var data = await res.json();
      if (!data.collectors || !data.collectors.length) return;

      collectorData = data.collectors.map(function (c) {
        return {
          name: c.name,
          color: c.color,
          description: c.description,
          yes: c.materialsYes || JSON.parse(c.materials_yes || "[]"),
          no: c.materialsNo || JSON.parse(c.materials_no || "[]"),
        };
      });

      items.forEach(function (item, i) {
        var c = data.collectors[i];
        if (!c) return;
        if (c.image_url) {
          var img = item.querySelector("img");
          if (img) img.src = c.image_url;
        }
        if (c.color) item.setAttribute("data-color", c.color);
        if (c.name) item.setAttribute("data-name", c.name);
      });
    } catch (e) {
      /* mantém dados embutidos */
    }
  }

  async function init() {
    await loadCollectorsFromApi();
    updateDimensions();
    // Inicia na Madeira (index 0) centralizada na frente
    targetAngle = 0;
    currentAngle = 0;
    
    // Adiciona transição inicial simples nos elementos do painel
    infoTitle.style.transition = "opacity 0.2s ease";
    infoDesc.style.transition = "opacity 0.2s ease";
    infoItemsContainer.style.transition = "opacity 0.2s ease";

    initEvents();
    
    // Pequeno delay para garantir que o layout renderizou antes de posicionar
    setTimeout(() => {
      requestAnimationFrame(renderLoop);
    }, 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
