/**
 * Conteúdo rico das páginas de programas — usado no seed do CMS e como fallback estático.
 */
(function (root, factory) {
  if (typeof module !== "undefined" && module.exports) {
    module.exports = factory();
  } else {
    root.PROGRAM_RICH_CONTENT = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  return {
    "ct-verde": [
      {
        key: "objetivos",
        label: "Objetivos do CT Verde",
        order: 3,
        content: {
          _type: "rich",
          label: "Nossos objetivos",
          title: 'Metas do <span class="text-gradient">CT Verde</span>',
          objectives: [
            "Conservar as áreas verdes existentes do Centro de Tecnologia.",
            "Ampliar espaços de convivência sustentáveis.",
            "Promover educação ambiental na comunidade universitária.",
            "Monitorar e proteger a fauna e a flora do CT.",
            "Incentivar a participação de estudantes, docentes e técnicos.",
            "Desenvolver projetos de sustentabilidade e agroecologia.",
          ],
        },
      },
      {
        key: "historia",
        label: "História do programa",
        order: 4,
        content: {
          _type: "rich",
          label: "História",
          title: 'Linha do tempo do <span class="text-gradient">CT Verde</span>',
          timeline: [
            { year: "2010", title: "Criação oficial", text: "Portaria nº 47/2010 institui o CT Verde como programa ambiental do Centro de Tecnologia." },
            { year: "2013", title: "Suspensão temporária", text: "Atividades pausadas para reorganização institucional." },
            { year: "2015", title: "Retomada", text: "O programa volta com novas ações de arborização e educação ambiental." },
            { year: "2017", title: "Planejamento intensivo", text: "Mais de 26 reuniões para planejar e executar ações ambientais no campus." },
            { year: "2026", title: "Expansão", text: "Integração com CT-Preserva, agrofloresta, compostagem e monitoramento da biodiversidade." },
          ],
        },
      },
      {
        key: "comissao",
        label: "Como funciona",
        order: 5,
        content: {
          _type: "rich",
          label: "Como funciona",
          title: "Coordenação e parcerias",
          intro: "O CT Verde é coordenado por uma comissão com docentes, técnicos administrativos e estudantes, reunindo-se mensalmente para discutir propostas ambientais.",
          items: [
            "👨‍🏫 Docentes do CT",
            "👩‍💼 Técnicos administrativos",
            "👨‍🎓 Estudantes extensionistas",
            "🤝 Parcerias com Unidades do CT, Prefeitura Universitária, EPlan/CT, Projeto MUDA e Decania",
          ],
        },
      },
      {
        key: "projetos",
        label: "Projetos e campanhas",
        order: 6,
        content: {
          _type: "rich",
          label: "Projetos",
          title: 'Projetos e <span class="text-gradient">campanhas</span>',
          projects: [
            {
              icon: "🌳",
              title: "Levantamento de Árvores",
              text: "Monitoramento das árvores do CT para identificar exemplares saudáveis, em risco, com necessidade de poda ou reposição vegetal.",
            },
            {
              icon: "🐶",
              title: "Monitoramento do Abandono de Animais",
              text: "Identificação de animais abandonados, conscientização sobre posse responsável e apoio à adoção.",
            },
            {
              icon: "🦝",
              title: "Monitoramento de Gambás",
              text: "Gambás controlam insetos, ajudam no equilíbrio ecológico e não transmitem febre amarela. São animais protegidos por lei.",
            },
            {
              icon: "🦟",
              title: "CT no Combate ao Aedes",
              text: "Campanha permanente contra mosquitos transmissores de dengue, Zika e chikungunya.",
              tips: ["Não deixar água parada.", "Manter caixas d'água fechadas.", "Limpar calhas e ralos.", "Descartar corretamente os resíduos."],
            },
            {
              icon: "🐒",
              title: "Febre Amarela: A Culpa Não é do Macaco",
              text: "Campanha educativa sobre o papel dos primatas no monitoramento epidemiológico.",
              myths: [
                { tag: "Mito", text: "O macaco transmite febre amarela." },
                { tag: "Verdade", text: "O macaco é vítima da doença e ajuda no monitoramento." },
              ],
            },
            {
              icon: "🌿",
              title: "Agrofloresta e Composta CT",
              text: "Agrofloresta entre os blocos C/D e compostagem de resíduos orgânicos em adubo para canteiros e hortas.",
            },
          ],
        },
      },
      {
        key: "beneficios-verdes",
        label: "Benefícios das áreas verdes",
        order: 7,
        content: {
          _type: "rich",
          label: "Benefícios",
          title: "Por que as áreas verdes importam",
          benefits: [
            { icon: "🌳", title: "Redução da temperatura", text: "Áreas arborizadas diminuem ilhas de calor no campus." },
            { icon: "💨", title: "Qualidade do ar", text: "Vegetação filtra poluentes e produz oxigênio." },
            { icon: "🐦", title: "Abrigo para fauna", text: "Habitat para aves, insetos polinizadores e pequenos mamíferos." },
            { icon: "😊", title: "Bem-estar", text: "Espaços verdes melhoram a convivência da comunidade acadêmica." },
            { icon: "🌎", title: "Biodiversidade", text: "Conservação de espécies nativas e equilíbrio ecológico." },
          ],
        },
      },
      {
        key: "curiosidades",
        label: "Você sabia?",
        order: 8,
        content: {
          _type: "rich",
          label: "Você sabia?",
          title: "Curiosidades ambientais",
          items: [
            "Uma árvore adulta pode absorver dezenas de kg de CO₂ por ano.",
            "Gambás ajudam a controlar pragas urbanas no CT.",
            "Áreas verdes reduzem ilhas de calor em campus urbanos.",
            "A compostagem pode reduzir significativamente resíduos orgânicos enviados ao lixo.",
          ],
        },
      },
      {
        key: "perspectivas",
        label: "Perspectivas 2026",
        order: 9,
        content: {
          _type: "rich",
          label: "Futuro",
          title: 'Projetos estratégicos <span class="text-gradient">2026</span>',
          projects: [
            { icon: "🌡️", title: "Monitoramento Climático", text: "Sensores de temperatura, umidade, índice de calor e qualidade do ar." },
            { icon: "🦋", title: "Inventário Digital da Biodiversidade", text: "Catálogo online de aves, gambás, polinizadores, árvores e plantas ornamentais." },
            { icon: "🗺️", title: "Mapa Verde Interativo", text: "Visualização de árvores catalogadas, agrofloresta, compostagem e pontos de observação." },
            { icon: "🌳", title: "Adote uma Árvore", text: "Acompanhamento de espécie, localização, data de plantio e curiosidades." },
            { icon: "🌱", title: "Jardim Sustentável da Triagem", text: "Requalificação da área do ReciclaCT com canteiros, reaproveitamento de madeira e oficina verde." },
          ],
        },
      },
    ],

    reciclact: [
      {
        key: "historia",
        label: "Linha do tempo",
        order: 2.5,
        content: {
          _type: "rich",
          label: "História",
          title: 'Linha do tempo do <span class="text-gradient">ReciclaCT</span>',
          timeline: [
            { year: "2006", title: "Projeto piloto", text: "Reitor Aloísio Teixeira designa o CT para implantar coleta seletiva como modelo para a UFRJ." },
            { year: "2007", title: "Criação oficial", text: "Lançamento do Programa ReciclaCT de coleta seletiva solidária." },
            { year: "2010", title: "Centro de Triagem", text: "Construção do espaço para receber, separar, prensar e pesar recicláveis." },
            { year: "2014–2017", title: "Fórum Verde", text: "Eventos ambientais, recepção de calouros e fortalecimento da educação ambiental." },
            { year: "2024–2026", title: "CT-Preserva", text: "Transformação em projeto de extensão universitária com ampliação das ações educativas." },
          ],
        },
      },
      {
        key: "ciclo",
        label: "Caminho dos resíduos",
        order: 3.5,
        content: {
          _type: "rich",
          label: "Ciclo da reciclagem",
          title: 'O caminho dos <span class="text-gradient">resíduos</span>',
          intro: "Clique em cada etapa para entender como o material reciclável percorre o campus até voltar ao mercado.",
          cycle: [
            { icon: "1️⃣", title: "Descarte correto", text: "Você separa o resíduo no coletor adequado espalhado pelo CT." },
            { icon: "2️⃣", title: "Coleta pela equipe", text: "A equipe do ReciclaCT e catadores recolhem os materiais dos pontos de coleta." },
            { icon: "3️⃣", title: "Centro de Triagem", text: "Os resíduos chegam ao Centro de Triagem do CT." },
            { icon: "4️⃣", title: "Separação", text: "Materiais são conferidos e separados por categoria." },
            { icon: "5️⃣", title: "Prensagem e pesagem", text: "Recicláveis são prensados, pesados e armazenados." },
            { icon: "6️⃣", title: "Coleta da cooperativa", text: "Caminhão da cooperativa parceira recolhe os materiais." },
            { icon: "7️⃣", title: "Cooperativas", text: "Catadores organizados comercializam os resíduos." },
            { icon: "8️⃣", title: "Indústria de reciclagem", text: "Empresas transformam o material em nova matéria-prima." },
            { icon: "9️⃣", title: "Novos produtos", text: "Materiais reciclados retornam ao mercado em novas formas." },
          ],
        },
      },
      {
        key: "extensao",
        label: "CT-Preserva",
        order: 5.5,
        content: {
          _type: "rich",
          label: "Extensão universitária",
          title: 'Projeto <span class="text-gradient">CT-Preserva</span>',
          intro: "Coordenado por <strong>Marlene Barbosa Caldas</strong>, o ReciclaCT evoluiu para projeto de extensão que integra todos os programas ambientais do CT.",
          team: [
            { name: "Victor Machado", role: "Extensionista · CCMN/UFRJ", bio: "Educação ambiental, monitoramento de coletores e representação institucional." },
            { name: "Luis Machado", role: "Extensionista · CCMN/UFRJ", bio: "Gestão de resíduos, treinamentos e apoio operacional na triagem." },
            { name: "Ana Carolina Gomes", role: "Extensionista · CCMN/UFRJ", bio: "Feiras de conhecimento, visitas guiadas e ações de conscientização." },
          ],
          items: [
            "🏫 Palestras e apresentações para calouros e feiras de conhecimento",
            "♻️ Monitoramento e numeração dos coletores pelo campus",
            "👷 Treinamento de funcionários de limpeza e catadores",
            "🌎 SIAC, Feira de Carreiras, UFRJ Mar e parcerias com Fiocruz",
            "💻 Casamata digital para resíduos eletroeletrônicos e perigosos",
          ],
        },
      },
      {
        key: "cooperativas",
        label: "Cooperativas parceiras",
        order: 6.5,
        content: {
          _type: "rich",
          label: "Economia solidária",
          title: "Cooperativas de catadores",
          intro: "As cooperativas são organizações de catadores que comercializam materiais recicláveis, gerando renda e inclusão social.",
          benefits: [
            { icon: "💰", title: "Geração de renda", text: "A reciclagem é fonte de trabalho e renda para famílias." },
            { icon: "👨‍👩‍👧‍👦", title: "Inclusão social", text: "Fortalecimento da economia circular com justiça social." },
            { icon: "♻️", title: "Destinação correta", text: "Materiais do CT são encaminhados a cooperativas parceiras." },
          ],
        },
      },
      {
        key: "mitos",
        label: "Mitos e verdades",
        order: 7.5,
        content: {
          _type: "rich",
          label: "Educação",
          title: "Mitos e verdades sobre reciclagem",
          projects: [
            {
              icon: "❓",
              title: "Copo descartável é reciclável?",
              text: "Sim, se estiver limpo e seco.",
              myths: [{ tag: "Dica", text: "Enxágue copos e embalagens antes de descartar." }],
            },
            {
              icon: "❓",
              title: "Caixa de pizza é reciclável?",
              text: "A parte limpa sim; a parte engordurada deve ir para rejeito.",
            },
            {
              icon: "❓",
              title: "Tampinhas devem ser retiradas da garrafa?",
              text: "Não necessariamente — podem ser descartadas junto se o coletor aceitar.",
            },
          ],
        },
      },
    ],

    "ct-eficiente": [
      {
        key: "historia",
        label: "História",
        order: 3,
        content: {
          _type: "rich",
          label: "História",
          title: 'Linha do tempo do <span class="text-gradient">CT Eficiente</span>',
          timeline: [
            { year: "2009", title: "CT Consciente", text: "Criação do programa de racionalização de recursos no CT." },
            { year: "2014", title: "CT Eficiente", text: "Reestruturação e mudança de nome." },
            { year: "2015–2018", title: "Estudos e ações", text: "Consumo de água e energia, torneiras eficientes, descargas econômicas e iluminação LED." },
            { year: "2026", title: "Monitoramento inteligente", text: "Ampliação para dashboards, simuladores e educação ambiental digital." },
          ],
        },
      },
      {
        key: "energia-agua",
        label: "Energia e água",
        order: 4,
        content: {
          _type: "rich",
          label: "Recursos",
          title: "Consumo de energia e água",
          projects: [
            {
              icon: "💡",
              title: "Energia elétrica",
              text: "LED consome até 80% menos que lâmpadas antigas. Equipamentos em stand-by continuam consumindo energia.",
              tips: ["Desligar monitores ao sair.", "Aproveitar luz natural.", "Comunicar lâmpadas queimadas."],
            },
            {
              icon: "🚰",
              title: "Água",
              text: "Recurso finito — pequenas atitudes reduzem desperdício em laboratórios e áreas comuns.",
              tips: ["Fechar torneiras corretamente.", "Comunicar vazamentos.", "Usar apenas o necessário."],
            },
          ],
        },
      },
      {
        key: "tecnologias",
        label: "Tecnologias sustentáveis",
        order: 5,
        content: {
          _type: "rich",
          label: "Tecnologia",
          title: "Soluções incentivadas pelo programa",
          benefits: [
            { icon: "💡", title: "Iluminação LED", text: "Menor consumo, maior durabilidade e menos resíduos." },
            { icon: "👁️", title: "Sensores de presença", text: "Evitam iluminação desnecessária em corredores e salas." },
            { icon: "🚰", title: "Torneiras automáticas", text: "Reduzem desperdício e aumentam a higiene." },
            { icon: "🔧", title: "Redutores de vazão", text: "Mantêm o conforto com menor consumo hídrico." },
          ],
        },
      },
      {
        key: "caca-desperdicio",
        label: "Caça ao desperdício",
        order: 6,
        content: {
          _type: "rich",
          label: "Monitoramento",
          title: "Caça ao desperdício",
          intro: "O programa monitora situações que geram desperdício de recursos no campus.",
          items: [
            "💧 Vazamentos e goteiras",
            "💡 Luzes acesas sem necessidade",
            "❄️ Ar-condicionado em ambientes vazios",
            "🚰 Torneiras defeituosas",
            "🔌 Equipamentos ligados sem uso",
          ],
          cta: { text: "Reportar desperdício", href: "#contato" },
        },
      },
      {
        key: "perspectivas",
        label: "Ideias 2026",
        order: 7,
        content: {
          _type: "rich",
          label: "Futuro",
          title: 'Centro de Controle <span class="text-gradient">Ambiental</span>',
          projects: [
            { icon: "📱", title: "Formulário de ocorrências", text: "Reporte vazamentos, lâmpadas queimadas e defeitos em equipamentos." },
            { icon: "🌡️", title: "Monitoramento inteligente", text: "Sensores de temperatura, umidade e consumo energético/hídrico." },
            { icon: "🏢", title: "Selo Unidade Eficiente", text: "Premiação para laboratórios com boas práticas de sustentabilidade." },
            { icon: "☀️", title: "Estudo solar", text: "Viabilidade de painéis solares nos blocos do CT." },
          ],
        },
      },
    ],

    "ct-eletro": [
      {
        key: "historia",
        label: "História",
        order: 3,
        content: {
          _type: "rich",
          label: "História",
          title: 'Linha do tempo <span class="text-gradient">REEE</span>',
          timeline: [
            { year: "2014", title: "Idealização", text: "Planejamento do programa de gestão de eletroeletrônicos." },
            { year: "2016", title: "Início oficial", text: "Atividades de coleta e destinação de REEE no CT." },
            { year: "2017", title: "Primeiros PEVs", text: "Instalação dos Pontos de Entrega Voluntária." },
            { year: "2018", title: "Cadeia de gestão", text: "Mapeamento de geradores e desenvolvimento da logística." },
            { year: "2026", title: "Casamata digital", text: "Expansão com inventário digital e economia circular tecnológica." },
          ],
        },
      },
      {
        key: "ciclo-reee",
        label: "Caminho do eletroeletrônico",
        order: 4,
        content: {
          _type: "rich",
          label: "Logística reversa",
          title: 'O caminho do <span class="text-gradient">eletroeletrônico</span>',
          cycle: [
            { icon: "📱", title: "Equipamento em desuso", text: "Celular, computador ou outro REEE deixa de ser utilizado." },
            { icon: "📦", title: "PEV", text: "Entrega no Ponto de Entrega Voluntária do CT." },
            { icon: "🔍", title: "Avaliação técnica", text: "Verificação do estado e potencial de reaproveitamento." },
            { icon: "⚙️", title: "Reparo ou desmontagem", text: "Equipamento funcional é reutilizado; defeitos simples são reparados." },
            { icon: "♻️", title: "Reciclagem especializada", text: "Componentes irrecuperáveis seguem para reciclagem certificada." },
            { icon: "🌎", title: "Nova matéria-prima", text: "Materiais retornam à cadeia produtiva." },
          ],
        },
      },
      {
        key: "riscos",
        label: "Por que não jogar no lixo",
        order: 5,
        content: {
          _type: "rich",
          label: "Riscos ambientais",
          title: "Por que REEE não vai no lixo comum",
          intro: "Equipamentos contêm metais pesados e substâncias tóxicas que contaminam solo e água se descartados incorretamente.",
          items: [
            "⚠️ Chumbo, mercúrio, cádmio e níquel em componentes",
            "🔋 Baterias de lítio podem causar incêndios",
            "☣️ Contaminação do solo e da água",
            "💎 Perda de materiais valiosos (ouro, cobre, terras raras)",
          ],
        },
      },
      {
        key: "casamata",
        label: "Casamata digital",
        order: 6,
        content: {
          _type: "rich",
          label: "Gestão digital",
          title: "Casamata de Eletroeletrônicos",
          intro: "Espaço físico e digital para armazenamento, catalogação e rastreabilidade dos REEE.",
          benefits: [
            { icon: "🏷️", title: "Registro único", text: "Cada item recebe número, data, origem e destino final." },
            { icon: "📊", title: "Inventário permanente", text: "Dados para pesquisa, extensão e transparência." },
            { icon: "🔧", title: "Banco de componentes", text: "Peças reaproveitáveis para projetos estudantis e laboratórios." },
          ],
          cta: { text: "Conhecer o programa", href: "ct-eletro.html" },
        },
      },
      {
        key: "seguranca",
        label: "Segurança de dados",
        order: 7,
        content: {
          _type: "rich",
          label: "Importante",
          title: "Antes de descartar equipamentos",
          items: [
            "⚠️ Apague arquivos e dados pessoais",
            "⚠️ Remova contas e credenciais",
            "⚠️ Formate discos e dispositivos",
            "⚠️ Faça backup do que precisar manter",
          ],
        },
      },
    ],

    "ct-residuos": [
      {
        key: "historia",
        label: "História",
        order: 3,
        content: {
          _type: "rich",
          label: "História",
          title: 'Linha do tempo <span class="text-gradient">Resíduos Perigosos</span>',
          timeline: [
            { year: "2012", title: "CT Destinação Responsável", text: "Criação do programa de gestão de resíduos Classe I." },
            { year: "2013", title: "Resíduos químicos", text: "Atuação com laboratórios do CT e CCMN." },
            { year: "2015", title: "Pilhas e baterias", text: "Parceria para logística reversa." },
            { year: "2016", title: "Lâmpadas fluorescentes", text: "Destinação de mais de 7.000 lâmpadas." },
            { year: "2017", title: "Contrato especializado", text: "Destinação de 21 toneladas de resíduos perigosos." },
            { year: "2026", title: "Casamata integrada", text: "Proposta de casamata física e sistema digital unificado." },
          ],
        },
      },
      {
        key: "ciclo",
        label: "Fluxograma",
        order: 4,
        content: {
          _type: "rich",
          label: "Gestão segura",
          title: "Fluxo de resíduos perigosos",
          cycle: [
            { icon: "🧪", title: "Laboratório", text: "Geração do resíduo na atividade de pesquisa ou ensino." },
            { icon: "🔍", title: "Identificação", text: "Classificação conforme NBR 10.004 e fichas de segurança." },
            { icon: "📦", title: "Acondicionamento", text: "Embalagem e rotulagem corretas." },
            { icon: "📋", title: "Solicitação de coleta", text: "Registro e agendamento com a equipe ambiental." },
            { icon: "🏭", title: "Casamata", text: "Armazenamento temporário seguro." },
            { icon: "🚚", title: "Transporte e tratamento", text: "Empresa especializada realiza destinação final." },
          ],
        },
      },
      {
        key: "riscos",
        label: "O que são resíduos perigosos",
        order: 5,
        content: {
          _type: "rich",
          label: "Classificação",
          title: "Resíduos Classe I",
          intro: "Substâncias que apresentam periculosidade por inflamabilidade, corrosividade, reatividade, toxicidade ou risco biológico.",
          items: [
            "🧪 Ácidos, bases e solventes de laboratório",
            "🔋 Pilhas, baterias e lâmpadas fluorescentes",
            "🏥 Resíduos hospitalares e biológicos",
            "☣️ Produtos contaminados e reagentes vencidos",
          ],
        },
      },
      {
        key: "casamata",
        label: "Casamata",
        order: 6,
        content: {
          _type: "rich",
          label: "Infraestrutura",
          title: "Casamata de Resíduos Perigosos",
          intro: "Estrutura física e digital para armazenamento temporário e controle de resíduos químicos, lâmpadas e baterias.",
          benefits: [
            { icon: "📋", title: "Rastreabilidade", text: "Código, responsável, laboratório, quantidade e classe de risco." },
            { icon: "🔒", title: "Segurança", text: "Área controlada com procedimentos operacionais." },
            { icon: "📊", title: "Relatórios", text: "Dados para conformidade legal e indicadores ambientais." },
          ],
          cta: { text: "Conhecer o programa", href: "ct-residuosperigosos.html" },
        },
      },
      {
        key: "capacitacao",
        label: "Capacitação",
        order: 7,
        content: {
          _type: "rich",
          label: "Formação",
          title: "Capacitação e estágios",
          intro: "O programa oferece oportunidades para estudantes de Química, Engenharia Química, Farmácia, Biotecnologia, Engenharia Ambiental e Segurança do Trabalho.",
          items: [
            "Inventário e classificação de resíduos",
            "Coletas e gestão digital",
            "Elaboração de procedimentos operacionais",
            "Educação ambiental e resposta a emergências",
          ],
        },
      },
    ],
  };
});
