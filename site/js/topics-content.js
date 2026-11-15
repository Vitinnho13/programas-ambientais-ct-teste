/**
 * Conteúdo acadêmico dos cards e páginas de tópico
 */
(function () {
  "use strict";

  var CT_IMG =
    "https://sintufrj.org.br/wp-content/uploads/2020/05/CT-EM-TRABALHO-REMOTO.jpg";

  var index = {
    sobre: [
      {
        slug: "por-que-existimos",
        category: "Institucional",
        title: "Por que existimos",
        excerpt:
          "Um campus mais limpo, menos resíduos a aterro e oportunidades reais de aplicar conhecimento técnico em problemas ambientais concretos.",
        image: CT_IMG,
        backUrl: "index.html#sobre",
        contentHtml:
          "<p>Os <strong>Programas Ambientais do CT</strong> nasceram da necessidade de transformar a gestão de resíduos e o consumo de recursos no Centro de Tecnologia da UFRJ em uma oportunidade de extensão, pesquisa aplicada e formação cidadã.</p>" +
          "<p>Para quem estuda e trabalha no CT, isso significa um ambiente mais saudável, menos resíduos enviados a aterros sanitários, maior senso de comunidade e possibilidades concretas de aplicar conhecimento técnico — da engenharia à comunicação — em desafios ambientais reais.</p>" +
          "<p>O projeto articula docentes, técnicos, estudantes e prestadores de serviço em ações que vão da coleta seletiva à educação ambiental, sempre com foco na responsabilidade institucional da universidade pública.</p>",
      },
      {
        slug: "quem-somos",
        category: "Conexão / Nossa Gente",
        title: "Quem somos",
        excerpt:
          "Projeto de extensão da UFRJ que integra reciclagem, reaproveitamento e conscientização ambiental no campus do CT.",
        image: "images/EquipePACT.jpeg",
        backUrl: "index.html#sobre",
        contentHtml:
          "<p>O <strong>Programas Ambientais do CT</strong> é um projeto de extensão universitária da UFRJ voltado a práticas sustentáveis dentro do Centro de Tecnologia. Criado a partir do histórico do ReciclaCT, o projeto integra estudantes, professores e a comunidade acadêmica em ações de reciclagem, reaproveitamento de materiais e educação ambiental.</p>" +
          "<p>Atuamos na interface entre <strong>tecnologia</strong> e <strong>meio ambiente</strong>, estimulando hábitos conscientes e fortalecendo uma cultura de responsabilidade ecológica no campus.</p>",
      },
      {
        slug: "sustentabilidade",
        category: "Valores",
        title: "Sustentabilidade",
        excerpt:
          "Práticas que equilibram necessidades atuais com a preservação dos recursos para as futuras gerações.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
        backUrl: "index.html#sobre",
        contentHtml:
          "<p>A sustentabilidade no CT não é apenas um discurso: traduz-se em políticas de gestão de resíduos, eficiência energética, conservação de áreas verdes e formação de cidadãos críticos.</p>" +
          "<p>O princípio orientador é o equilíbrio entre desenvolvimento acadêmico e preservação ambiental, garantindo que o campus funcione como laboratório vivo de boas práticas.</p>",
      },
      {
        slug: "educacao-ambiental",
        category: "Valores",
        title: "Educação Ambiental",
        excerpt:
          "Oficinas, palestras e campanhas que transformam informação técnica em atitudes no dia a dia da universidade.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
        backUrl: "index.html#sobre",
        contentHtml:
          "<p>A educação ambiental é eixo transversal de todos os programas do CT. Por meio de oficinas práticas, palestras, materiais didáticos e ações de comunicação, traduzimos dados, legislação e ciência em práticas acessíveis.</p>" +
          "<p>O objetivo é formar uma comunidade universitária capaz de tomar decisões informadas sobre consumo, descarte e conservação.</p>",
      },
      {
        slug: "impacto-social",
        category: "Valores",
        title: "Impacto Social",
        excerpt:
          "Engajamento coletivo que fortalece vínculos entre comunidade acadêmica, catadores e práticas ecológicas.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
        backUrl: "index.html#sobre",
        contentHtml:
          "<p>O impacto social dos Programas Ambientais do CT manifesta-se na inclusão de cooperativas de catadores, na geração de renda a partir de materiais recicláveis e no fortalecimento de laços comunitários no campus.</p>" +
          "<p>Projetos de extensão oferecem aos estudantes experiências concretas de cidadania e responsabilidade social.</p>",
      },
    ],
    economia: [
      {
        slug: "o-que-e-economia-circular",
        category: "Conceito",
        title: "O que é economia circular?",
        excerpt:
          "Sistema regenerativo em que produtos, materiais e recursos permanecem no ciclo o máximo possível.",
        image: "images/economia circular.webp",
        backUrl: "index.html#economia-circular",
        contentHtml:
          "<p>A <strong>economia circular</strong> é um sistema regenerativo em que o valor dos produtos, materiais e recursos se mantém no ciclo o máximo possível. Em vez do modelo linear “extrair — produzir — descartar”, busca-se <strong>redesenhar fluxos</strong> para reutilizar, reparar e reciclar.</p>" +
          "<p>No contexto universitário, isso implica repensar aquisições, uso de laboratórios, gestão de resíduos e ciclo de vida dos equipamentos.</p>",
      },
      {
        slug: "importancia-nas-universidades",
        category: "Conceito",
        title: "Importância nas universidades",
        excerpt:
          "Campi concentram fluxo intenso de resíduos e consumo — território estratégico para inovar em sustentabilidade.",
        image: "images/importanciaeconomiacircular.jpeg",
        backUrl: "index.html#economia-circular",
        contentHtml:
          "<p>Universidades concentram milhares de pessoas, laboratórios, refeitórios e infraestrutura — gerando volumes expressivos de resíduos e consumo energético. Integrar <strong>educação</strong>, <strong>infraestrutura</strong> e <strong>cultura</strong> permite que a UFRJ funcione como laboratório vivo de políticas sustentáveis.</p>" +
          "<p>As práticas desenvolvidas no CT podem ser replicadas em outros campi e na sociedade.</p>",
      },
      {
        slug: "reducao-residuos",
        category: "Prática",
        title: "Redução de resíduos",
        excerpt:
          "Diagnóstico, coleta seletiva e hábitos conscientes diminuem o volume enviado para aterros.",
        image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&q=80",
        backUrl: "index.html#economia-circular",
        contentHtml:
          "<p>A redução de resíduos começa pelo diagnóstico dos fluxos de descarte no campus. Com mapeamento de pontos críticos, sinalização adequada e campanhas de conscientização, é possível diminuir significativamente o volume de rejeitos enviados a aterros.</p>",
      },
      {
        slug: "reaproveitamento",
        category: "Prática",
        title: "Reaproveitamento",
        excerpt:
          "Materiais ganham nova vida em oficinas, prototipagem e projetos interdisciplinares.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
        backUrl: "index.html#economia-circular",
        contentHtml:
          "<p>O reaproveitamento de materiais — papel, plástico, metais e equipamentos — alimenta oficinas de extensão, prototipagem acadêmica e projetos interdisciplinares que demonstram o valor dos resíduos como insumo.</p>",
      },
      {
        slug: "impacto-ambiental-positivo",
        category: "Prática",
        title: "Impacto ambiental positivo",
        excerpt:
          "Menos extração de matéria-prima, menor pegada de carbono e campus mais saudável.",
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80",
        backUrl: "index.html#economia-circular",
        contentHtml:
          "<p>Práticas circulares reduzem a demanda por matérias-primas virgens, diminuem emissões de gases de efeito estufa e contribuem para um ambiente universitário mais saudável e agradável.</p>",
      },
    ],
    objetivos: [
      {
        slug: "reduzir-desperdicios",
        category: "Missão",
        title: "Reduzir desperdícios",
        excerpt: "Mapear pontos críticos de descarte e propor alternativas viáveis no CT.",
        image: "https://images.unsplash.com/photo-1564981797816-104fce4bd6d8?w=800&q=80",
        backUrl: "index.html#objetivos",
        contentHtml:
          "<p>Identificamos e monitoramos os principais pontos de geração e descarte incorreto de resíduos no campus, propondo soluções técnicas e comportamentais para reduzir desperdícios.</p>",
      },
      {
        slug: "incentivar-reciclagem",
        category: "Missão",
        title: "Incentivar reciclagem",
        excerpt: "Pontos de coleta, sinalização clara e campanhas de engajamento contínuo.",
        image: "images/logo.png",
        backUrl: "index.html#objetivos",
        contentHtml:
          "<p>A reciclagem no CT depende de infraestrutura adequada — coletores identificados por cor, Centro de Triagem e parcerias com cooperativas — aliada a campanhas permanentes de engajamento.</p>",
      },
      {
        slug: "promover-educacao",
        category: "Missão",
        title: "Promover educação ambiental",
        excerpt: "Conteúdo acessível que conecta ciência, cidadania e práticas no campus.",
        image: "https://images.unsplash.com/photo-1540575467063-027a883d8ac0?w=800&q=80",
        backUrl: "index.html#objetivos",
        contentHtml:
          "<p>Desenvolvemos materiais, oficinas e ações formativas que aproximam a comunidade acadêmica de temas como legislação ambiental, logística reversa e consumo responsável.</p>",
      },
      {
        slug: "integrar-tecnologia",
        category: "Missão",
        title: "Integrar tecnologia e sustentabilidade",
        excerpt: "Projetos que usam engenharia e dados para otimizar fluxos de materiais.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
        backUrl: "index.html#objetivos",
        contentHtml:
          "<p>Como Centro de Tecnologia, o CT reúne competências em engenharia, computação e ciências exatas — aplicadas ao monitoramento de resíduos, eficiência energética e gestão de dados ambientais.</p>",
      },
      {
        slug: "estimular-acoes-coletivas",
        category: "Missão",
        title: "Estimular ações coletivas",
        excerpt: "Eventos e parcerias que constroem senso de comunidade em torno da causa.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
        backUrl: "index.html#objetivos",
        contentHtml:
          "<p>Mutirões, feiras sustentáveis, fóruns ambientais e parcerias interinstitucionais fortalecem o engajamento coletivo e multiplicam o impacto das ações.</p>",
      },
    ],
    projetos: [
      {
        slug: "coleta-seletiva",
        category: "Atuação",
        title: "Coleta seletiva",
        excerpt: "Organização de pontos estratégicos e orientação sobre separação correta de resíduos.",
        image: "images/logo.png",
        backUrl: "index.html#projetos",
        contentHtml:
          "<p>A coleta seletiva no CT organiza pontos estratégicos de descarte em salas, corredores, refeitórios e áreas externas, com orientação clara sobre o que depositar em cada coletor.</p>",
      },
      {
        slug: "oficinas",
        category: "Atuação",
        title: "Oficinas",
        excerpt: "Atividades práticas de reaproveitamento, compostagem e conscientização lúdica.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
        backUrl: "index.html#projetos",
        contentHtml:
          "<p>Oficinas práticas abordam reaproveitamento criativo, compostagem doméstica e laboratorial, e dinâmicas lúdicas de separação de resíduos para diferentes públicos do campus.</p>",
      },
      {
        slug: "palestras",
        category: "Atuação",
        title: "Palestras",
        excerpt: "Debates com especialistas sobre resíduos, legislação ambiental e inovação verde.",
        image: "https://images.unsplash.com/photo-1540575467063-027a883d8ac0?w=800&q=80",
        backUrl: "index.html#projetos",
        contentHtml:
          "<p>Palestras e mesas-redondas reúnem docentes, pesquisadores e profissionais da área ambiental para discutir temas contemporâneos de sustentabilidade e economia circular.</p>",
      },
      {
        slug: "campanhas-ambientais",
        category: "Atuação",
        title: "Campanhas ambientais",
        excerpt: "Comunicação visual e digital para ampliar alcance e engajar toda a comunidade.",
        image: "https://images.unsplash.com/photo-1523293182080-08b45f6af016?w=800&q=80",
        backUrl: "index.html#projetos",
        contentHtml:
          "<p>Campanhas sazonais e permanentes utilizam cartazes, redes sociais e ações presenciais para reforçar hábitos sustentáveis e divulgar as iniciativas dos programas.</p>",
      },
      {
        slug: "eventos-sustentaveis",
        category: "Atuação",
        title: "Eventos sustentáveis",
        excerpt: "Feiras, mutirões e encontros que celebram práticas ecológicas no campus.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
        backUrl: "index.html#projetos",
        contentHtml:
          "<p>Eventos como feiras de sustentabilidade, mutirões de limpeza e encontros comunitários celebram as conquistas ambientais e mobilizam novos participantes.</p>",
      },
      {
        slug: "acoes-ufrj",
        category: "Atuação",
        title: "Ações dentro da UFRJ",
        excerpt: "Articulação com centros e coletivos para alinhar esforços e multiplicar resultados.",
        image: "https://images.unsplash.com/photo-1564981797816-104fce4bd6d8?w=800&q=80",
        backUrl: "index.html#projetos",
        contentHtml:
          "<p>Os Programas Ambientais do CT articulam-se com outros núcleos, projetos de extensão e coletivos da UFRJ para ampliar o alcance e a consistência das ações sustentáveis.</p>",
      },
    ],
    resultados: [
      {
        slug: "alunos-impactados",
        category: "Resultados",
        title: "850+ alunos impactados",
        excerpt: "Estudantes alcançados por oficinas, palestras e ações de extensão no campus.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
        backUrl: "index.html#numeros",
        contentHtml:
          "<p>Mais de <strong>850 estudantes</strong> foram impactados direta ou indiretamente pelas ações de educação ambiental, oficinas e campanhas dos Programas Ambientais do CT.</p>" +
          "<p class=\"numeros__note\">Números ilustrativos — ajuste conforme dados reais do projeto.</p>",
      },
      {
        slug: "residuos-reciclados",
        category: "Resultados",
        title: "12 toneladas recicladas",
        excerpt: "Volume de resíduos encaminhados à reciclagem por meio da coleta seletiva.",
        image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&q=80",
        backUrl: "index.html#numeros",
        contentHtml:
          "<p>Aproximadamente <strong>12 toneladas</strong> de resíduos recicláveis foram encaminhados a cooperativas de catadores, evitando o descarte em aterros sanitários.</p>",
      },
      {
        slug: "acoes-realizadas",
        category: "Resultados",
        title: "45+ ações realizadas",
        excerpt: "Oficinas, palestras, campanhas e mutirões executados ao longo dos anos.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
        backUrl: "index.html#numeros",
        contentHtml:
          "<p>Mais de <strong>45 ações</strong> — entre oficinas, palestras, campanhas e eventos — foram realizadas, consolidando uma cultura de sustentabilidade no CT.</p>",
      },
      {
        slug: "participantes-projeto",
        category: "Resultados",
        title: "32+ participantes",
        excerpt: "Extensionistas, voluntários e parceiros que integram o projeto no dia a dia.",
        image: "images/EquipePACT.jpeg",
        backUrl: "index.html#numeros",
        contentHtml:
          "<p>O projeto conta com mais de <strong>32 participantes</strong> ativos — extensionistas, docentes, técnicos e voluntários — que sustentam as operações diárias.</p>",
      },
    ],
  };

  var reciclact = [
    {
      slug: "historia",
      category: "Sobre",
      title: "História do ReciclaCT",
      excerpt:
        "Programa piloto de coleta seletiva solidária do CT/UFRJ, criado em 2007 para cumprir a legislação de destinação a cooperativas.",
      image: "images/logo_reciclact.png",
      backUrl: "reciclact.html",
      contentHtml:
        "<p>O <strong>ReciclaCT</strong> é o programa piloto de coleta seletiva solidária do Centro de Tecnologia da UFRJ, criado em <strong>2007</strong> para cumprir o antigo <strong>Decreto 5.940/06</strong> (atualizado pelo <strong>Decreto 10.936/2022</strong>), que estabelece a destinação de resíduos recicláveis às cooperativas de catadores.</p>" +
        "<p>Em <strong>2010</strong> foi inaugurado o <strong>Centro de Triagem</strong> oficial, permitindo centralizar, pesar, prensar e catalogar os resíduos gerados em salas de aula, laboratórios e restaurantes do CT.</p>" +
        "<p>O projeto atua na destinação de materiais, treinamento ambiental de funcionários e sensibilização da comunidade universitária, garantindo inclusão social e fortalecimento da economia circular.</p>",
    },
    {
      slug: "linha-do-tempo",
      category: "História",
      title: "Linha do tempo",
      excerpt:
        "Marcos desde a apresentação ao Conselho Superior em 2006 até a transformação em CT-Preserva em 2024.",
      image: CT_IMG,
      backUrl: "reciclact.html",
      contentHtml:
        "<ul>" +
        "<li><strong>2006:</strong> Apresentação do projeto ao Conselho Superior.</li>" +
        "<li><strong>2007:</strong> Lançamento oficial do Programa ReciclaCT.</li>" +
        "<li><strong>2010:</strong> Construção do Centro de Triagem no campus.</li>" +
        "<li><strong>2017:</strong> Criação do Fórum Verde e expansão de campanhas.</li>" +
        "<li><strong>2024:</strong> Transformação no Projeto de Extensão <strong>CT-Preserva</strong>.</li>" +
        "</ul>",
    },
    {
      slug: "funcionamento",
      category: "Operação",
      title: "Funcionamento e impacto",
      excerpt:
        "Destinação de materiais, treinamento ambiental e sensibilização da comunidade universitária.",
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&q=80",
      backUrl: "reciclact.html",
      contentHtml:
        "<p>O ReciclaCT opera com coletores identificados por cor distribuídos pelo campus, equipe de extensionistas que realiza rondas e campanhas, e o Centro de Triagem onde os materiais são separados, pesados e encaminhados a cooperativas.</p>" +
        "<p>Tags do projeto: <strong>Estágio & Extensão</strong>, <strong>Centro de Triagem</strong>, <strong>Inclusão de Cooperativas</strong>.</p>",
    },
    {
      slug: "caminho-residuos",
      category: "Interativo",
      title: "O caminho dos resíduos no CT",
      excerpt:
        "Entenda o ciclo completo percorrido pelos materiais desde o descarte até a reciclagem industrial.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      backUrl: "reciclact.html",
      interactive: "cycle-slider",
      scripts: ["js/reciclact-interactive.js"],
      contentHtml:
        "<p>Desde o descarte correto nos coletores coloridos até a industrialização dos materiais, cada etapa do ciclo envolve agentes diferentes: usuários do campus, equipe de triagem, cooperativas e indústria reciclador.</p>" +
        "<p>Use o simulador abaixo para percorrer as etapas do processo.</p>",
    },
    {
      slug: "coletores",
      category: "Interativo",
      title: "Coletores de coleta seletiva",
      excerpt:
        "Conheça os coletores distribuídos pelo campus e saiba o que descartar em cada um.",
      image: "images/plastico.png",
      backUrl: "reciclact.html",
      interactive: "coletores-carousel",
      scripts: ["js/reciclact-carousel.js"],
      contentHtml:
        "<p>O CT dispõe de coletores identificados por cor para papel, plástico, vidro, metal, orgânicos, resíduos perigosos, eletroeletrônicos e rejeitos. A separação correta é fundamental para a viabilidade econômica da reciclagem.</p>",
    },
    {
      slug: "calculadora-impacto",
      category: "Interativo",
      title: "Calculadora de impacto ecológico",
      excerpt:
        "Insira a quantidade de resíduos que você descarta corretamente e veja os recursos economizados.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      backUrl: "reciclact.html",
      interactive: "calc-impacto",
      scripts: ["js/reciclact-interactive.js"],
      contentHtml:
        "<p>A reciclagem gera economia mensurável de água, energia elétrica, árvores preservadas e emissões de CO₂ evitadas. A calculadora traduz seu hábito de descarte correto em indicadores ambientais concretos.</p>",
    },
    {
      slug: "jogo-descarte",
      category: "Jogo",
      title: "Jogo do descarte correto",
      excerpt:
        "Duelo de reciclagem: ordene os resíduos para o coletor certo e pontue!",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      backUrl: "reciclact.html",
      interactive: "game-descarte",
      scripts: ["js/reciclact-interactive.js"],
      contentHtml:
        "<p>O jogo simula situações reais de descarte no campus. Cada acerto reforça o conhecimento sobre a cor e o tipo de cada coletor, reduzindo erros que comprometem fardos inteiros de material reciclável.</p>",
    },
    {
      slug: "mitos-verdades",
      category: "Educação",
      title: "Mitos, verdades e erros comuns",
      excerpt:
        "Informação essencial baseada na rotina diária dos catadores do Centro de Triagem.",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80",
      backUrl: "reciclact.html",
      contentHtml:
        "<h3>Top 5 erros no descarte</h3>" +
        "<ul>" +
        "<li>Restos de alimento nas embalagens — atraem vetores e estragam fardos.</li>" +
        "<li>Papel molhado ou engordurado — perde propriedade de celulose.</li>" +
        "<li>Vidro quebrado solto — risco de cortes aos catadores.</li>" +
        "<li>Pilhas no lixo comum — vazamento de metais pesados.</li>" +
        "<li>Resíduos eletrônicos misturados — devem ir às casamatas de REEE.</li>" +
        "</ul>" +
        "<h3>Mitos & Verdades</h3>" +
        "<ul>" +
        "<li><strong>Copo descartável é reciclável?</strong> Sim, desde que limpo.</li>" +
        "<li><strong>Caixa de pizza?</strong> Parte limpa sim; base engordurada vai para rejeitos.</li>" +
        "<li><strong>Tampinhas separadas?</strong> Verdade — possuem valor comercial alto.</li>" +
        "</ul>",
    },
  ];

  var ctVerde = [
    {
      slug: "sobre",
      category: "Sobre",
      title: "Conheça o CT Verde",
      excerpt:
        "Conservação, manutenção e ampliação de áreas verdes e espaços de convivência do CT desde 2010.",
      image: "images/logo_ctverde.png",
      backUrl: "ct-verde.html",
      contentHtml:
        "<p>O <strong>CT Verde</strong> é um programa ambiental criado em 2010 pelos Programas Ambientais do Centro de Tecnologia da UFRJ, com o objetivo de promover o gerenciamento, conservação e ampliação das áreas verdes e espaços de convivência do CT.</p>" +
        "<p>Atua por meio de projetos de preservação ambiental, educação ambiental, monitoramento da fauna e flora, melhoria dos espaços verdes e conscientização da comunidade acadêmica.</p>",
    },
    {
      slug: "historia",
      category: "História",
      title: "História do programa",
      excerpt:
        "De 2010 à integração com sensores inteligentes e painéis em tempo real em 2026.",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80",
      backUrl: "ct-verde.html",
      contentHtml:
        "<ul>" +
        "<li><strong>2010:</strong> Criação oficial via Portaria Decania nº 47/2010.</li>" +
        "<li><strong>2013:</strong> Suspensão temporária por reestruturações.</li>" +
        "<li><strong>2015:</strong> Retomada oficial das atividades.</li>" +
        "<li><strong>2017:</strong> Mais de 26 reuniões para consolidação de campanhas.</li>" +
        "<li><strong>2026:</strong> Jardim da Triagem, sensores e painéis em tempo real.</li>" +
        "</ul>",
    },
    {
      slug: "funcionamento",
      category: "Operação",
      title: "Como funciona",
      excerpt:
        "Comissão de docentes, técnicos e estudantes que planeja e executa projetos ambientais mensalmente.",
      image: "images/EquipePACT.jpeg",
      backUrl: "ct-verde.html",
      contentHtml:
        "<p>O CT Verde é coordenado por uma comissão formada por docentes, técnicos administrativos e estudantes extensionistas. Reuniões mensais planejam ações em parceria com Unidades do CT, Prefeitura Universitária, EPlan/CT, Projeto MUDA e Decania.</p>",
    },
    {
      slug: "campanhas",
      category: "Ações",
      title: "Projetos e campanhas",
      excerpt:
        "Levantamento de árvores, combate ao abandono de animais, monitoramento de gambás e combate ao Aedes.",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80",
      backUrl: "ct-verde.html",
      contentHtml:
        "<p>Principais frentes: levantamento botânico das árvores do campus, campanhas contra abandono de animais, monitoramento de gambás (marsupiais protegidos), combate permanente ao mosquito Aedes e educação sobre febre amarela.</p>",
    },
    {
      slug: "agroecologia",
      category: "Agroecologia",
      title: "Agroecologia e compostagem",
      excerpt:
        "Agrofloresta CT, compostagem e projetos de requalificação urbana entre os blocos C e D.",
      image: "https://images.unsplash.com/photo-1416879595882-3373ad04825b?w=800&q=80",
      backUrl: "ct-verde.html",
      contentHtml:
        "<p>A Agrofloresta CT utiliza conceitos de agrofloresta para recuperar solo degradado, aumentar biodiversidade, plantar espécies alimentícias e atenuar ilhas de calor no campus.</p>",
    },
    {
      slug: "painel-ambiental",
      category: "Interativo",
      title: "Painel ambiental 2026",
      excerpt:
        "Monitoramento em tempo real de indicadores ambientais do campus com sensores inteligentes.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      backUrl: "ct-verde.html",
      interactive: "painel-verde",
      scripts: ["js/ct-verde-interactive.js"],
      contentHtml:
        "<p>O painel integra dados de sensores climáticos, umidade do solo e indicadores de biodiversidade, oferecendo visualização em tempo real para docentes, pesquisadores e gestores do campus.</p>",
    },
  ];

  var ctEficiente = [
    {
      slug: "sobre",
      category: "Sobre",
      title: "Conheça o CT Eficiente",
      excerpt:
        "Uso racional de água e energia elétrica no CT/UFRJ desde 2009.",
      image: "images/logo_cteficiente.png",
      backUrl: "ct-eficiente.html",
      contentHtml:
        "<p>O <strong>CT Eficiente</strong> promove o uso racional de recursos naturais e energéticos no Centro de Tecnologia por meio de estudos técnicos, ações educativas e implantação de tecnologias eficientes como LED, sensores de presença e redutores de vazão.</p>",
    },
    {
      slug: "linha-do-tempo",
      category: "História",
      title: "Linha do tempo",
      excerpt: "De CT Consciente (2009) ao monitoramento climático inteligente em 2026.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      backUrl: "ct-eficiente.html",
      contentHtml:
        "<ul>" +
        "<li><strong>2009:</strong> Criação como CT Consciente.</li>" +
        "<li><strong>2014:</strong> Reestruturação — CT Eficiente.</li>" +
        "<li><strong>2015–2018:</strong> Estudos de consumo e trocas de lâmpadas.</li>" +
        "<li><strong>2026:</strong> Monitoramento climático e gestão digital de vazamentos.</li>" +
        "</ul>",
    },
    {
      slug: "desperdicio",
      category: "Denúncias",
      title: "Combate ao desperdício",
      excerpt:
        "Canal para reportar vazamentos, lâmpadas queimadas e consumo irregular no campus.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      backUrl: "ct-eficiente.html",
      contentHtml:
        "<p>O combate ao desperdício depende do olhar atento da comunidade. Vazamentos, lâmpadas queimadas e equipamentos ligados desnecessariamente podem ser reportados à equipe do CT Eficiente.</p>",
    },
    {
      slug: "simulador",
      category: "Interativo",
      title: "Simulador de economia",
      excerpt:
        "Calcule quanto água e energia você pode economizar com hábitos mais eficientes.",
      image: "https://images.unsplash.com/photo-1466611659841-941683275784?w=800&q=80",
      backUrl: "ct-eficiente.html",
      interactive: "simulador-eficiente",
      scripts: ["js/ct-eficiente-interactive.js"],
      contentHtml:
        "<p>Pequenas mudanças de hábito — desligar equipamentos, reduzir tempo de banho, usar iluminação natural — acumulam economia significativa em escala universitária.</p>",
    },
    {
      slug: "quiz",
      category: "Jogo",
      title: "Quiz de eficiência energética",
      excerpt: "Teste seus conhecimentos sobre consumo consciente de água e luz.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      backUrl: "ct-eficiente.html",
      interactive: "quiz-eficiente",
      scripts: ["js/ct-eficiente-interactive.js"],
      contentHtml:
        "<p>O quiz aborda conceitos de eficiência energética, equipamentos sustentáveis e boas práticas aplicáveis a salas de aula, laboratórios e áreas comuns do CT.</p>",
    },
    {
      slug: "boas-praticas",
      category: "Educação",
      title: "Boas práticas",
      excerpt:
        "Orientações para reduzir consumo de água e energia no dia a dia do campus.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      backUrl: "ct-eficiente.html",
      contentHtml:
        "<p>Desligue luzes e equipamentos ao sair, reporte vazamentos imediatamente, prefira escadas quando possível, utilize iluminação natural e evite ar-condicionado com janelas abertas.</p>",
    },
  ];

  var ctEletro = [
    {
      slug: "sobre",
      category: "Sobre",
      title: "Gestão de e-waste no CT",
      excerpt:
        "Destinação ambientalmente adequada de REEE gerados no CT/UFRJ desde 2016.",
      image: "images/logo_cteletroeletronicos.png",
      backUrl: "ct-eletro.html",
      contentHtml:
        "<p>O <strong>CT Eletroeletrônicos</strong> promove a destinação adequada de Resíduos de Equipamentos Eletroeletrônicos (REEE) por meio de Pontos de Entrega Voluntária, triagem de equipamentos inservíveis e recondicionamento de peças.</p>",
    },
    {
      slug: "linha-do-tempo",
      category: "História",
      title: "Linha do tempo",
      excerpt: "De 2014 à integração com Casamata Digital e Banco de Componentes em 2026.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      backUrl: "ct-eletro.html",
      contentHtml:
        "<ul>" +
        "<li><strong>2014:</strong> Idealização do programa.</li>" +
        "<li><strong>2016:</strong> Início oficial e primeiros PEVs.</li>" +
        "<li><strong>2017:</strong> Instalação de PEVs fixos.</li>" +
        "<li><strong>2018:</strong> Mapeamento de grandes geradores de REEE.</li>" +
        "<li><strong>2026:</strong> Casamata Digital e Banco de Componentes.</li>" +
        "</ul>",
    },
    {
      slug: "logistica",
      category: "Operação",
      title: "Logística reversa",
      excerpt:
        "Coleta, triagem, reparo e destinação final de equipamentos eletrônicos no campus.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      backUrl: "ct-eletro.html",
      contentHtml:
        "<p>A logística reversa de REEE envolve coleta nos PEVs, transporte ao Centro de Triagem, desmontagem, separação de componentes reutilizáveis e encaminhamento de frações perigosas a destinação licenciada.</p>",
    },
    {
      slug: "simulador",
      category: "Interativo",
      title: "Simulador de impacto REEE",
      excerpt:
        "Veja o impacto ambiental de descartar corretamente seus equipamentos eletrônicos.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      backUrl: "ct-eletro.html",
      interactive: "simulador-eletro",
      scripts: ["js/ct-eletro-interactive.js"],
      contentHtml:
        "<p>Equipamentos eletrônicos contêm metais pesados e materiais valiosos. O descarte correto evita contaminação do solo e recupera insumos para a indústria.</p>",
    },
    {
      slug: "dados-seguros",
      category: "Educação",
      title: "Segurança de dados",
      excerpt:
        "Orientações para apagar dados antes de descartar computadores e dispositivos móveis.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      backUrl: "ct-eletro.html",
      contentHtml:
        "<p>Antes de descartar equipamentos, é fundamental garantir a eliminação segura de dados pessoais e institucionais. Formatação adequada, destruição de mídias e políticas de TI devem ser seguidas.</p>",
    },
  ];

  var ctResiduos = [
    {
      slug: "sobre",
      category: "Sobre",
      title: "Resíduos perigosos no CT",
      excerpt:
        "Gestão segura de resíduos químicos, biológicos e contaminantes gerados em laboratórios.",
      image: "images/perigosos.png",
      backUrl: "ct-residuosperigosos.html",
      contentHtml:
        "<p>O programa de <strong>Resíduos Perigosos</strong> do CT/UFRJ gerencia o descarte seguro de materiais químicos, biológicos, perfurocortantes e outros resíduos que exigem tratamento especial conforme a legislação ambiental e sanitária.</p>",
    },
    {
      slug: "classificacao",
      category: "Educação",
      title: "Classificação de resíduos",
      excerpt:
        "Entenda as classes de resíduos perigosos e os coletores específicos para cada tipo.",
      image: "images/toxicos.png",
      backUrl: "ct-residuosperigosos.html",
      contentHtml:
        "<p>Resíduos perigosos são classificados conforme origem (químico, biológico, radioativo) e risco (tóxico, corrosivo, inflamável). Cada classe possui coletor e procedimento específico de acondicionamento e transporte.</p>",
    },
    {
      slug: "quiz",
      category: "Jogo",
      title: "Quiz de resíduos perigosos",
      excerpt:
        "Teste se você sabe identificar e descartar corretamente resíduos de laboratório.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9db581854?w=800&q=80",
      backUrl: "ct-residuosperigosos.html",
      interactive: "quiz-residuos",
      scripts: ["js/ct-residuos-interactive.js"],
      contentHtml:
        "<p>O manuseio incorreto de resíduos perigosos pode causar acidentes graves. O quiz reforça procedimentos de segurança exigidos em laboratórios do CT.</p>",
    },
    {
      slug: "procedimentos",
      category: "Operação",
      title: "Procedimentos de descarte",
      excerpt:
        "Passo a passo para acondicionamento, rotulagem e solicitação de coleta de resíduos.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
      backUrl: "ct-residuosperigosos.html",
      contentHtml:
        "<p>Todo resíduo perigoso deve ser acondicionado em recipiente compatível, identificado com rótulo legível e encaminhado conforme cronograma de coleta do departamento responsável.</p>",
    },
  ];

  var lists = {
    reciclact: reciclact,
    "ct-verde": ctVerde,
    "ct-eficiente": ctEficiente,
    "ct-eletro": ctEletro,
    "ct-residuos": ctResiduos,
  };

  function getList(program, section) {
    if (program === "index") {
      if (!index[section]) index[section] = [];
      return index[section];
    }
    return lists[program] || null;
  }

  function getTopic(program, slug) {
    if (program === "index") {
      var keys = Object.keys(index);
      for (var i = 0; i < keys.length; i++) {
        var found = index[keys[i]].find(function (t) {
          return t.slug === slug;
        });
        if (found) return found;
      }
      return null;
    }
    var list = lists[program];
    if (!list) return null;
    return (
      list.find(function (t) {
        return t.slug === slug;
      }) || null
    );
  }

  function mergeFields(target, saved) {
    if (!saved) return target;
    var merged = Object.assign({}, target);
    if (saved.title != null) merged.title = saved.title;
    if (saved.category != null) merged.category = saved.category;
    if (saved.excerpt != null) merged.excerpt = saved.excerpt;
    if (saved.image != null) merged.image = saved.image;
    if (saved.contentHtml != null) merged.contentHtml = saved.contentHtml;
    if (Array.isArray(saved.blocks)) {
      merged.blocks = saved.blocks.map(function (block) {
        return Object.assign({}, block);
      });
    }
    if (saved.section) merged.section = saved.section;
    if (saved.design) merged.design = Object.assign({}, saved.design);
    return merged;
  }

  function applySaved(saved) {
    if (!saved || !saved.program || !saved.slug) return null;
    var topic = getTopic(saved.program, saved.slug);
    if (topic) {
      var merged = mergeFields(topic, saved);
      var collections = saved.program === "index"
        ? Object.keys(index).map(function (key) { return index[key]; })
        : [lists[saved.program]];
      collections.forEach(function (list) {
        if (!list) return;
        var indexInList = list.indexOf(topic);
        if (indexInList !== -1) list[indexInList] = merged;
      });
      return merged;
    }

    var created = {
      slug: saved.slug,
      category: saved.category || "",
      title: saved.title || saved.slug,
      excerpt: saved.excerpt || "",
      image: saved.image || "images/logo.png",
      contentHtml: saved.contentHtml || "",
      blocks: Array.isArray(saved.blocks) ? saved.blocks.map(function (block) { return Object.assign({}, block); }) : [],
      design: Object.assign({}, saved.design || {}),
      section: saved.section || "",
      backUrl: saved.program === "index"
        ? "index.html"
        : saved.program === "ct-residuos"
          ? "ct-residuosperigosos.html"
          : saved.program + ".html",
      custom: true,
    };

    var list = getList(saved.program, saved.section || "sobre");
    if (list && !list.some(function (item) { return item.slug === created.slug; })) list.push(created);
    return created;
  }

  function removeTopic(program, slug) {
    var collections = program === "index"
      ? Object.keys(index).map(function (key) { return index[key]; })
      : [lists[program]];
    collections.forEach(function (list) {
      if (!list) return;
      for (var i = list.length - 1; i >= 0; i--) {
        if (list[i].slug === slug) list.splice(i, 1);
      }
    });
  }

  function applyAll(savedList) {
    if (!savedList || !savedList.length) return;
    savedList.forEach(applySaved);
  }

  window.TopicsContent = {
    index: index,
    reciclact: reciclact,
    "ct-verde": ctVerde,
    "ct-eficiente": ctEficiente,
    "ct-eletro": ctEletro,
    "ct-residuos": ctResiduos,
    getTopic: getTopic,
    applySaved: applySaved,
    applyAll: applyAll,
    removeTopic: removeTopic,
  };
})();
