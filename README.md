<!-- markdownlint-disable MD004 MD007 MD048 MD033-->
# Wallet (carteira)

## Content (conteúdo)

- [Wallet (carteira)](#wallet-carteira)
  - [Content (conteúdo)](#content-conteúdo)
  - [Deploy link (link do deploy)](#deploy-link-link-do-deploy)
  - [Routes (rotas)](#routes-rotas)
  - [Environment (ambiente)](#environment-ambiente)
  - [English](#english)
    - [Project info](#project-info)
    - [Cloning the project and opening it on VSCode](#cloning-the-project-and-opening-it-on-vscode)
    - [How to run it locally](#how-to-run-it-locally)
    - [How to run it through docker](#how-to-run-it-through-docker)
    - [How to run it through docker-compose](#how-to-run-it-through-docker-compose)
    - [Login](#login)
    - [Create, update and delete an expense](#create-update-and-delete-an-expense)
    - [Responsiveness](#responsiveness)
  - [Português](#português)
    - [Informações do projeto](#informações-do-projeto)
    - [Clonando o projeto e abrindo no VSCode](#clonando-o-projeto-e-abrindo-no-vscode)
    - [Como rodar localmente](#como-rodar-localmente)
    - [Como rodar através do docker](#como-rodar-através-do-docker)
    - [Como rodar através do docker-compose](#como-rodar-através-do-docker-compose)
    - [Entrar](#entrar)
    - [Criar, editar e excluir despesas](#criar-editar-e-excluir-despesas)
    - [Responsividade](#responsividade)

## Deploy link (link do deploy)

[https://rodrigomarchisilva.github.io/trybe-wallet/](https://rodrigomarchisilva.github.io/trybe-wallet/)

## Routes (rotas)

- `/` - Login page (página de login)
- `/carteira` - Wallet page (página da carteira)

## Environment (ambiente)

| Tool (ferramenta) | Version (versão) |
| ----------- | ------- |
| [Node](https://nodejs.org/en/) | 18.8.0 |
| [Docker](https://www.docker.com/) | 20.10.12 |
| [Docker Compose](https://docs.docker.com/compose/) | 1.29.2 |

## English

### Project info

* **Why I did this project:** This project is from [Trybe](https://www.betrybe.com/)'s course, Module 2 - Front-end Development;
* **Core Technologies:** React (w/ class components), Redux, Material UI;
* **Secondary Technologies:** Docker (w/ compose), ESLint, Prettier;
* **Description:** This project consists of a wallet, where you can add, edit and delete expenses. It also has a login page with validations. Local storage wasn't used, so the data is lost when the page is refreshed. The reason for this, is that the project's main goal is to practice React and Redux. Forms also come with standard values to make it easier to test the app. I learned Material UI and how to use it with React, just for the sake of learning something new;
* **How Trybe projects work:** Trybe makes tests and you have to pass them to get your project approved, through GitHub Actions. They tell you what the app should do and you have to make it happen with your own logic and design, often having to use things they didn't teach you yet, to practice your research, problem solving and learning skills. So it's not a copy-paste project, like in most of the courses;
* **My approach to learning through projects:** I always try to do things for the first time without using external references, e.g. Stack Overflow, ready to use designs and so on. I only use them when I'm stuck and can't find a solution on my own. I believe that doing this when I'm only practicing, increases my creativity. That's why some of my projects might not follow well stablished patterns of code and design;
* **Commit history:** It might be a bit messy or compromised in some projects, either because I had to migrate the project to a new repository, or because I was still in the learning process and didn't know how to use Git properly. I'm still learning, but I already improved a lot.

### Cloning the project and opening it on VSCode

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

### How to run it locally

  **1.** Install the dependencies:

  ~~~bash
    npm install
  ~~~

  **2.** Run the app:

  ~~~bash
    npm start
  ~~~

### How to run it through docker

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

### How to run it through docker-compose

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

### Login

![Login](/gifs/wallet-login.gif)

  * **Email:** As it doesn't have a back-end, the email could be anything, as long as it follows the standard email pattern;
  * **Password:** The password must have at least 6 digits.

### Create, update and delete an expense

![Create, update and delete an expense](/gifs/wallet-cud.gif)

  * **Create:** To create an expense, you must fill in all the fields and click on the "Adicionar despesa" button;
  * **Update:** To update an expense, you must click on the "Editar despesa" button and change the values you want to update. Then, click on the "Editar despesa" button again;
  * **Delete:** To delete an expense, you must click on the "Excluir despesa" button;
  * **Exchange Rates:** The exchange rates are fetched from AwesomeAPI's [Exchange Rates API](https://docs.awesomeapi.com.br/api-de-moedas).

### Responsiveness

![Responsiveness](/gifs/wallet-responsiveness.gif)

  The app is responsive across all resolutions, thanks to Material UI's Grid system.

## Português

### Informações do projeto

* **Por que eu fiz esse projeto:** Esse projeto é do curso da [Trybe](https://www.betrybe.com/), Módulo 2 - Desenvolvimento Front-end;
* **Tecnologias principais:** React (c/ componentes de classe), Redux, Material UI;
* **Tecnologias secundárias:** Docker (c/ compose), ESLint, Prettier;
* **Descrição:** Esse projeto consiste em uma carteira, onde você pode adicionar, editar e deletar despesas. Ele também tem uma página de login com validações. O local storage não foi usado, então os dados são perdidos quando a página é atualizada. A razão para isso, é que o objetivo principal do projeto é praticar React e Redux. Os formulários também vêm com valores padrão para facilitar o teste do app. Eu aprendi Material UI e como usá-lo com React, apenas para aprender algo novo;
* **Como os projetos da Trybe funcionam:** A Trybe faz testes, validados através do GitHub Actions, e você tem que contemplá-los para ser aprovado no bloco. O README diz o que o app deve fazer e você desenvolve com a sua própria lógica e design, muitas vezes tendo que usar conhecimentos que eles ainda não passaram, para praticar suas habilidades de pesquisa, solução de problemas e aprendizado. Então não é um projeto copia e cola, como na maioria dos cursos;
* **Minha abordagem para aprender através de projetos:** Quando faço algo pela primeira vez, tento não usar referências externas, como Stack Overflow, designs prontos e assim por diante. Eu só uso quando estou emperrado e não consigo encontrar uma solução sozinho. Acredito que o uso dessa prática ao estudar, aumenta minha criatividade. É por isso que alguns dos meus projetos podem não seguir padrões estabelecidos de código e design;
* **Histórico de commits:** Pode estar um pouco bagunçado ou comprometido em alguns projetos, seja porque tive que migrar o projeto para um novo repositório, ou porque ainda estava no processo de aprendizado e não sabia usar o Git direito. Eu ainda estou aprendendo, mas já melhorei muito;

### Clonando o projeto e abrindo no VSCode

  **Pré-requisitos:** Você precisa ter o [Node.js](https://nodejs.org/en/) e o [Git](https://git-scm.com/) instalados no seu computador;

  **1.** Clone o repositório:

  ~~~bash
    git clone
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

### Como rodar localmente

  **1.** Instale as dependências:

  ~~~bash
    npm install
  ~~~

  **2.** Rode o app:

  ~~~bash
    npm start
  ~~~

### Como rodar através do docker

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

### Como rodar através do docker-compose

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

### Entrar

![Login](/gifs/wallet-login.gif)

  * **E-mail:** Como não há um banco de dados, qualquer email válido é aceito;
  * **Senha:** A senha deve ter pelo menos 6 dígitos.

### Criar, editar e excluir despesas

![Create, update and delete an expense](/gifs/wallet-cud.gif)

  * **Criar:** Para criar uma despesa, você precisa preencher todos os campos do formulário e clicar em "Adicionar despesa";
  * **Editar:** Para editar uma despesa, você precisa clicar no botão do lápis e preencher os campos que deseja alterar. Por fim, clique em "Editar despesa";
  * **Excluir:** Para excluir uma despesa, você precisa clicar no botão da lixeira;
  * **Taxas de câmbio:** As taxas de câmbio são obtidas através da AwesomeAPI's [Exchange Rates API](https://docs.awesomeapi.com.br/api-de-moedas).

### Responsividade

![Responsiveness](/gifs/wallet-responsiveness.gif)

  O projeto é responsivo em todos os tamanhos de tela.
