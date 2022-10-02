<!-- markdownlint-disable MD004 MD007 MD048 MD033-->
# :moneybag: Wallet (carteira)

## :open_book: Content (conteúdo)

- [:moneybag: Wallet (carteira)](#moneybag-wallet-carteira)
  - [:open_book: Content (conteúdo)](#open_book-content-conteúdo)
  - [:us: English](#us-english)
    - [:desktop_computer: Deploy link](#desktop_computer-deploy-link)
    - [:motorway: Routes](#motorway-routes)
    - [:deciduous_tree: Development environment](#deciduous_tree-development-environment)
    - [:information_source: Project info](#information_source-project-info)
    - [:printer: Cloning the project and opening it on VSCode](#printer-cloning-the-project-and-opening-it-on-vscode)
    - [:computer: How to run it locally](#computer-how-to-run-it-locally)
    - [:whale2: How to run it through docker](#whale2-how-to-run-it-through-docker)
    - [:whale: How to run it through docker-compose](#whale-how-to-run-it-through-docker-compose)
    - [:door: Login](#door-login)
    - [:man_technologist: Create, update and delete an expense](#man_technologist-create-update-and-delete-an-expense)
    - [:iphone: Responsiveness](#iphone-responsiveness)
  - [:brazil: Português](#brazil-português)
    - [:desktop_computer: Link do deploy](#desktop_computer-link-do-deploy)
    - [:motorway: Rotas](#motorway-rotas)
    - [:deciduous_tree: Ambiente de desenvolvimento](#deciduous_tree-ambiente-de-desenvolvimento)
    - [:information_source: Informações do projeto](#information_source-informações-do-projeto)
    - [:printer: Clonando o projeto e abrindo no VSCode](#printer-clonando-o-projeto-e-abrindo-no-vscode)
    - [:computer: Como rodar localmente](#computer-como-rodar-localmente)
    - [:whale2: Como rodar através do docker](#whale2-como-rodar-através-do-docker)
    - [:whale: Como rodar através do docker-compose](#whale-como-rodar-através-do-docker-compose)
    - [:door: Entrar](#door-entrar)
    - [:man_technologist: Criar, editar e excluir despesas](#man_technologist-criar-editar-e-excluir-despesas)
    - [:iphone: Responsividade](#iphone-responsividade)

## :us: English

### :desktop_computer: Deploy link

[https://rodrigomarchisilva.github.io/trybe-wallet/](https://rodrigomarchisilva.github.io/trybe-wallet/)

### :motorway: Routes

> HashRouter has been used because of gh-pages limitations.

- `/#/` - Login page;
- `/#/carteira` - Wallet page.

### :deciduous_tree: Development environment

| Tool | Version |
| ----------- | ------- |
| [Node](https://nodejs.org/en/) | 18.8.0 |
| [Docker](https://www.docker.com/) | 20.10.12 |
| [Docker Compose](https://docs.docker.com/compose/) | 1.29.2 |

### :information_source: Project info

* **Why I did this project:** This project is from [Trybe](https://www.betrybe.com/)'s course, Module 2 - Front-end Development;
* **Core Technologies:** React (w/ class components), Redux, Material UI;
* **Secondary Technologies:** Docker (w/ compose), ESLint, Prettier;
* **Description:** This project consists of a wallet, where you can add, edit and delete expenses. It also has a login page with validations. Local storage wasn't used, so the data is lost when the page is refreshed. The reason for this, is that the project's main goal is to practice React and Redux. Forms also come with standard values to make it easier to test the app. I learned Material UI and how to use it with React, just for the sake of learning something new;
* **How Trybe projects work:** Trybe makes tests and you have to pass them to get your project approved, through GitHub Actions. They tell you what the app should do and you have to make it happen with your own logic and design, often having to use things they didn't teach you yet, to practice your research, problem solving and learning skills. So it's not a copy-paste project, like in most of the courses;
* **Commit history:** It might be a bit messy or cut by half in some projects, either because I had to migrate the project to a new repository and lost the first commits, or because, at the time, I had not yet learned how to use atomic and conventional commits.

### :printer: Cloning the project and opening it on VSCode

  **Prerequisites:** You need to have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your computer;

  **1.** Clone the repository:

  ~~~bash
    git clone git@github.com:rodrigomarchisilva/trybe-wallet.git
  ~~~

  **2.** Open the project:

  ~~~bash
    cd trybe-wallet
  ~~~

  **3.** Make sure you have VSCode installed and running:

  ```bash
    code -v
  ```

  **4.** If not, download and install it:

  * [Download VSCode](https://code.visualstudio.com/download)

  **5.** Access it through VSCode:

  ~~~bash
    code .
  ~~~

### :computer: How to run it locally

  **1.** Install the dependencies:

  ~~~bash
    npm install
  ~~~

  **2.** Run the app:

  ~~~bash
    npm start
  ~~~

### :whale2: How to run it through docker

  **1.** Make sure you have Docker installed and running:

  ~~~bash
    docker -v
  ~~~

  **2.** If not, download and install it:

  * [Download Docker](https://www.docker.com/products/docker-desktop)

  **3.** Build the image:

  ~~~bash
    docker build -t trybe-wallet .
  ~~~

  **4.** Run the container:

  ~~~bash
    docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm trybe-wallet
  ~~~

### :whale: How to run it through docker-compose

  **1.** Make sure you have Docker installed and running:

  ~~~bash
    docker -v
  ~~~

  **2.** If not, download and install it:

  * [Download Docker](https://www.docker.com/products/docker-desktop)

  **3.** Make sure you have Docker Compose installed and running:

  ~~~bash
    docker-compose -v
  ~~~

  **4.** If not, download and install it:

  * [Download Docker Compose](https://docs.docker.com/compose/install/)

  **5.** Run the container:

  ~~~bash
    npm run compose:up
  ~~~

  **6.** Stop the container:

  ~~~bash
    npm run compose:down
  ~~~

### :door: Login

![Login](/gifs/wallet-login.gif)

  * **Email:** As it doesn't have a back-end, the email could be anything, as long as it follows the standard email pattern;
  * **Password:** The password must have at least 6 digits.

### :man_technologist: Create, update and delete an expense

![Create, update and delete an expense](/gifs/wallet-cud.gif)

  * **Create:** To create an expense, you must fill in all the fields and click on the "Adicionar despesa" button;
  * **Update:** To update an expense, you must click on the "Editar despesa" button and change the values you want to update. Then, click on the "Editar despesa" button again;
  * **Delete:** To delete an expense, you must click on the "Excluir despesa" button;
  * **Exchange Rates:** The exchange rates are fetched from AwesomeAPI's [Exchange Rates API](https://docs.awesomeapi.com.br/api-de-moedas).

### :iphone: Responsiveness

![Responsiveness](/gifs/wallet-responsiveness.gif)

  The app is responsive across all resolutions, thanks to Material UI's Grid system.

## :brazil: Português

### :desktop_computer: Link do deploy

[https://rodrigomarchisilva.github.io/trybe-wallet/](https://rodrigomarchisilva.github.io/trybe-wallet/)

### :motorway: Rotas

> HashRouter foi utilizado por limitações do GitHub Pages.

- `/#/` - Página de login;
- `/#/carteira` - Página da carteira.

### :deciduous_tree: Ambiente de desenvolvimento

| Ferramenta | Versão |
| ----------- | ------- |
| [Node](https://nodejs.org/en/) | 18.8.0 |
| [Docker](https://www.docker.com/) | 20.10.12 |
| [Docker Compose](https://docs.docker.com/compose/) | 1.29.2 |

### :information_source: Informações do projeto

* **Por que eu fiz esse projeto:** Esse projeto é do curso da [Trybe](https://www.betrybe.com/), Módulo 2 - Desenvolvimento Front-end;
* **Tecnologias principais:** React (c/ componentes de classe), Redux, Material UI;
* **Tecnologias secundárias:** Docker (c/ compose), ESLint, Prettier;
* **Descrição:** Esse projeto consiste em uma carteira, onde você pode adicionar, editar e deletar despesas. Ele também tem uma página de login com validações. O local storage não foi usado, então os dados são perdidos quando a página é atualizada. A razão para isso, é que o objetivo principal do projeto é praticar React e Redux. Os formulários também vêm com valores padrão para facilitar o teste do app. Eu aprendi Material UI e como usá-lo com React, apenas para aprender algo novo;
* **Como os projetos da Trybe funcionam:** A Trybe faz testes, validados através do GitHub Actions, e você tem que contemplá-los para ser aprovado no bloco. O README diz o que o app deve fazer e você desenvolve com a sua própria lógica e design, muitas vezes tendo que usar conhecimentos que eles ainda não passaram, para praticar suas habilidades de pesquisa, solução de problemas e aprendizado. Então não é um projeto copia e cola, como na maioria dos cursos;
* **Histórico de commits:** Pode estar um pouco bagunçado ou cortado pela metade em alguns projetos, seja porque eu tive que migrar o projeto para um novo repositório e perdi os primeiros commits, ou porque eu ainda não tinha aprendido a usar commits atômicos e convencionais.

### :printer: Clonando o projeto e abrindo no VSCode

  **Pré-requisitos:** Você precisa ter o [Node.js](https://nodejs.org/en/) e o [Git](https://git-scm.com/) instalados no seu computador;

  **1.** Clone o repositório:

  ~~~bash
    git clone git@github.com:rodrigomarchisilva/trybe-wallet.git
  ~~~

  **2.** Abra o projeto:

  ~~~bash
    cd trybe-wallet
  ~~~

  **3.** Certifique-se de ter o VSCode instalado e rodando:

  ```bash
    code -v
  ```

  **4.** Se não tiver, baixe e instale:

  * [Download VSCode](https://code.visualstudio.com/download)

  **5.** Acesse-o pelo VSCode:

  ~~~bash
    code .
  ~~~

### :computer: Como rodar localmente

  **1.** Instale as dependências:

  ~~~bash
    npm install
  ~~~

  **2.** Rode o app:

  ~~~bash
    npm start
  ~~~

### :whale2: Como rodar através do docker

  **1.** Certifique-se de ter o Docker instalado e rodando:

  ~~~bash
    docker -v
  ~~~

  **2.** Se não tiver, baixe e instale:

  * [Download Docker](https://www.docker.com/products/docker-desktop)

  **3.** Faça o build da imagem:

  ~~~bash
    docker build -t trybe-wallet .
  ~~~

  **4.** Rode o container:

  ~~~bash
    docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm trybe-wallet
  ~~~

### :whale: Como rodar através do docker-compose

  **1.** Certifique-se de ter o Docker Compose instalado e rodando:

  ~~~bash
    docker-compose -v
  ~~~

  **2.** Se não tiver, baixe e instale:

  * [Download Docker Compose](https://docs.docker.com/compose/install/)

  **3.** Rode o container:

  ~~~bash
    npm run compose:up
  ~~~

  **4.** Pare o container:

  ~~~bash
    npm run compose:down
  ~~~

### :door: Entrar

![Login](/gifs/wallet-login.gif)

  * **E-mail:** Como não há um banco de dados, qualquer email válido é aceito;
  * **Senha:** A senha deve ter pelo menos 6 dígitos.

### :man_technologist: Criar, editar e excluir despesas

![Create, update and delete an expense](/gifs/wallet-cud.gif)

  * **Criar:** Para criar uma despesa, você precisa preencher todos os campos do formulário e clicar em "Adicionar despesa";
  * **Editar:** Para editar uma despesa, você precisa clicar no botão do lápis e preencher os campos que deseja alterar. Por fim, clique em "Editar despesa";
  * **Excluir:** Para excluir uma despesa, você precisa clicar no botão da lixeira;
  * **Taxas de câmbio:** As taxas de câmbio são obtidas através da AwesomeAPI's [Exchange Rates API](https://docs.awesomeapi.com.br/api-de-moedas).

### :iphone: Responsividade

![Responsiveness](/gifs/wallet-responsiveness.gif)

  O projeto é responsivo em todos os tamanhos de tela.
