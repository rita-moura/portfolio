# Portfólio Pessoal - Rita Moura

![Deploy to GitHub Pages](https://github.com/rita-moura/portfolio/actions/workflows/deploy.yml/badge.svg)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Este é o meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e experiência como desenvolvedora. O projeto foi construído com tecnologias modernas, focando em uma interface limpa, responsiva e de alta performance.

**[Acesse a versão ao vivo aqui!](https://rita-moura.github.io/portfolio/)**

## ✨ Visão Geral

O objetivo deste projeto é criar um espaço centralizado para exibir meu trabalho e compartilhar um pouco sobre minha jornada profissional. O site inclui seções como:

-   **Sobre Mim:** Uma breve introdução sobre minhas paixões e competências.
-   **Projetos:** Uma seleção dos meus melhores projetos, com descrições, tecnologias utilizadas e links para o código-fonte.
-   **Habilidades:** Uma lista das tecnologias e ferramentas com as quais tenho experiência, conectada dinamicamente aos projetos.
-   **Contato:** Um formulário simples para facilitar o contato via WhatsApp.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

-   **Frontend:**
    -   **React:** Biblioteca para a construção da interface de usuário.
    -   **Vite:** Ferramenta de build para um desenvolvimento rápido e otimizado.
    -   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
    -   **Tailwind CSS:** Framework CSS para estilização rápida e customizável.
    -   **Shadcn/UI:** Coleção de componentes de UI reutilizáveis.
-   **Roteamento e Gerenciamento de Estado:**
    -   **React Router:** Para o gerenciamento de rotas da aplicação.
    -   **React Query:** Para o gerenciamento de estado assíncrono e fetching de dados da API do GitHub.
-   **Deployment:**
    -   **GitHub Pages:** Hospedagem do projeto.
    -   **GitHub Actions:** Para automação de CI/CD (deploy contínuo).

## ⚙️ Desenvolvimento Local

Para executar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
-   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Instalação e Execução

1.  **Clone o repositório:**

    ```bash
    git clone git@github.com:rita-moura/portfolio.git
    cd portfolio
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

O site estará disponível em `http://localhost:5173`.

### Scripts Disponíveis

-   `npm run dev`: Inicia o servidor de desenvolvimento com Hot-Reload.
-   `npm run build`: Compila e otimiza o projeto para produção.
-   `npm run lint`: Executa o ESLint para analisar o código e encontrar problemas.
-   `npm run preview`: Inicia um servidor local para visualizar a build de produção.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.