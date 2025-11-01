# 🌎 Plataforma Web "Amigos do Planeta"

## 📝 1. Visão Geral do Projeto

Este projeto consiste no desenvolvimento de uma plataforma web institucional para a ONG **"Amigos do Planeta"**. O objetivo foi simular uma entrega profissional de Front-end, aplicando de forma integrada e otimizada os principais conceitos de desenvolvimento web, incluindo semântica, responsividade, interatividade e acessibilidade.

A arquitetura de informação foi desenhada para atender diversas personas (Visitante, Voluntário, Doador e Administrador) em páginas dedicadas.

## ✨ 2. Soluções Técnicas e Diferenciais

O projeto foi construído com uma abordagem **Mobile-First** e foco em alta qualidade técnica:

### 💻 Estrutura e Estilização

| Objetivo | Solução Implementada | Impacto |
| :--- | :--- | :--- |
| **HTML5 Semântico** | Uso de tags `<header>`, `<main>`, `<section>`, `<footer>` e elementos de formulário nativos. | Garante melhor legibilidade do código, SEO otimizado e base sólida para Acessibilidade. |
| **CSS3 Responsivo** | Aplicação de **CSS Puro**, utilizando `flexbox`, `grid` e **Media Queries** com a estratégia *Mobile-First*. | Assegura que o layout e a usabilidade sejam perfeitos em telas de qualquer tamanho, do celular ao desktop. |

### 🚀 Interatividade e Consistência (JavaScript)

O arquivo `script.js` concentra as funcionalidades de aprimoramento de usabilidade e validação:

* **Máscaras de Input:** Implementação de máscaras dinâmicas em JavaScript puro para campos como **CPF**, **Telefone** e **CEP** no formulário de voluntariado.

* **Validação:** Utilização da validação nativa do HTML5 em conjunto com lógica JavaScript para garantir a correta formatação dos dados antes da submissão.

### ♿ Acessibilidade e Otimização

* **Acessibilidade (WCAG 2.1 AA):** Teste de contraste de cores e garantia de navegação por teclado (foco e tabulação). Uso de atributos **ARIA** (`aria-label`, `role`) em elementos interativos.

* **SEO e Descoberta:** Inclusão de meta tags essenciais (`viewport`, `description`) em todas as páginas para otimizar a descoberta em motores de busca.

## 📂 3. Estrutura de Arquivos

A aplicação segue uma arquitetura modular básica de Front-end, mantendo a separação entre estrutura, estilo e lógica:

/plataforma-ongs 

├── index.html # Página Institucional (Informativa) 

├── projetos.html # Portal de Projetos e Metas de Doação 

├── cadastro.html # Portal do Voluntário (Formulário Complexo) 

├── style.css # Estilos globais (CSS Puro, Responsivo) 

└── script.js # Lógica JavaScript (Máscaras, Validação, Interatividade)

## 💡 4. Metodologia de Desenvolvimento (Simulação Ágil)

O desenvolvimento simulou um ambiente profissional, seguindo os princípios de Metodologias Ágeis em três iterações principais:

| Iteração | Foco Principal | Entregáveis |
| :--- | :--- | :--- |
| **Iteração 1** | Estrutura Base | 3 páginas HTML com semântica e requisitos mínimos. |
| **Iteração 2** | Design e Interatividade | Layout Responsivo (CSS3) e Funções Essenciais de Máscaras (JS). |
| **Iteração 3** | Qualidade e Escopo | Acessibilidade (ARIA), Otimização SEO e Aprimoramento de Conteúdo. |

## 🏃 Como Executar

O projeto é 100% Front-end e pode ser executado diretamente no navegador:

1. **Clone o Repositório:**

git clone https://github.com/fabriciolivo/ProjWebOngs3.git


2. **Abra o Arquivo:**

* Navegue até a pasta clonada.

* Abra o arquivo `index.html` em seu navegador de preferência.

## 🎓 Créditos

Este projeto foi desenvolvido como requisito da disciplina de **Desenvolvimento WEB**.

* **Desenvolvedor:** Fabricio Gabriel Olivo

* **Disciplina:** Desenvolvimento WEB - Universidade Positivo