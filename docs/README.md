Documentação Técnica: Plataforma Web para ONGs - Amigos do Planeta

1. Visão Geral do Projeto

Este documento detalha os requisitos técnicos e as soluções aplicadas no desenvolvimento da plataforma web para a ONG "Amigos do Planeta". O projeto visa aplicar, de forma integrada, os conceitos de HTML5, CSS3, e JavaScript, simulando uma entrega profissional orientada a um contexto socialmente relevante.

2. Estrutura de Arquivos

O projeto utiliza uma estrutura básica de arquivos, adequada para deploy simples e desenvolvimento front-end puro:

/
├── index.html          # Página Institucional (Missão, Visão, Valores, Contato)
├── projetos.html       # Portal de Projetos (Metas de Doação, Indicadores de Impacto)
├── cadastro.html       # Portal do Voluntário (Formulário complexo de inscrição)
├── style.css           # Folha de Estilo: CSS3 Puro e Responsivo
└── script.js           # Lógica JavaScript: Máscaras de Input e Validação


3. Atendimento aos Objetivos Específicos

Objetivo Específico

Solução Implementada

Arquivos

HTML5: Estruturas Semânticas Complexas

Uso obrigatório de tags semânticas (<header>, <nav>, <main>, <section>, <article>, <figure>, <details>, <footer>) e hierarquia de títulos consistente (<h1> a <h3>). Uso de <fieldset> e <legend> para agrupamento lógico em formulários.

Todos os .html

CSS3: Leiautes Responsivos (Mobile-First)

Uso de CSS Puro, flexbox, grid e media queries com abordagem mobile-first (definições básicas para mobile, ajustes via @media (min-width: 768px) para desktop).

style.css

JavaScript: Funcionalidades Interativas

Implementação de máscaras de input para CPF, Telefone e CEP (script.js), garantindo a correta formatação dos dados antes da submissão. Validação nativa do HTML5 é utilizada em conjunto com JS.

script.js, cadastro.html

Acessibilidade (WCAG 2.1 AA)

Contraste de cores testado (verde/amarelo em fundo branco/escuro). Navegação por teclado garantida pela estrutura semântica e tabindex padrão. Uso de atributos ARIA (aria-label, role, aria-live) em elementos interativos e estruturais.

Todos os arquivos

SEO e Descoberta

Uso de <meta name="viewport"> e tags de título. Inclusão de <meta name="description"> em todas as páginas para otimizar a descoberta em motores de busca.

Todos os .html

4. Requisitos de Personas e Casos de Uso

A arquitetura de informação do site (navegação e conteúdo) foi pensada para servir as quatro personas principais:

Visitante: Acesso direto às informações institucionais (index.html), projetos (projetos.html) e contato.

Voluntário: Área dedicada com o Formulário de Inscrição (cadastro.html) e chamadas claras para o engajamento.

Doador/Apoiador: Foco na transparência (relatórios em index.html) e captação de recursos com acompanhamento de metas em tempo real (mock em projetos.html).

Administrador: Link de acesso e menção às funcionalidades de gestão (projetos, voluntários, métricas).

5. Metodologia e Versionamento (Simulação)

Para simular um ambiente profissional, o projeto foi desenvolvido seguindo os princípios de Metodologias Ágeis:

Iteração 1: Estrutura base e requisitos mínimos (3 páginas e semântica).

Iteração 2: Design Responsivo (CSS3) e Funcionalidades Essenciais (JS/Máscaras).

Iteração 3: Aprimoramento de Conteúdo, Acessibilidade, SEO e Escopo de Plataforma (versão atual).

Versionamento: Em um ambiente real, todos os arquivos seriam gerenciados via Git, com branches para features e pull requests para integração, garantindo o controle de histórico e a colaboração.