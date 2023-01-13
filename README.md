# Contents

* [Global Requisites](#global-requisites)
* [App Structure](#app-structure)
* [Install, Configure & Run](#install-configure--run)
* [List of Routes](#list-of-routes)

# Global Requisites

* node (>= 10.5.0)
* tsc (>= 3.0.1)
* typescript (>= 3.0.1)

# App Structure

```bash
├── dist
├── src
│   ├── controllers
│   │   └── Game.ts
│   ├── interfaces
│   │   └── vendors
│   │        ├── index.ts
│   │        ├── INext.ts
│   │        ├── IRequest.ts
│   │        └── IResponse.ts
│   ├── models
│   │   ├── Player.ts
│   │   └── Propriety.ts
│   ├── providers
│   │   ├── App.ts
│   │   ├── Express.ts
│   │   └── Routes.ts
│   ├── routes
│   │   └── Api.ts
│   ├── services
│   │   ├── BoardService.ts
│   │   ├── GameService.ts
│   │   └── PlayerService.ts
│   └── index.ts
├── .gitignore
├── nodemon.json
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json
```

# Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions.

```bash
# Clone the repo.
git clone https://github.com/juniomatias01/simulator-game.git;

# Goto the cloned project folder.
cd nodets;
```

```bash
# Without Docker

# Note: It is assumed here that you have MongoDB running in the background and that you have created the database.

# Install NPM dependencies.
npm install;

# Run the app
npm run dev;
```

```bash
# With Docker

# Note: It is assumed here that you have Docker running in the background.

# Run the app in docker as a foreground process
docker-compose up

# Run the app in docker as a background process
docker-compose up -d
```


# List of Routes

```sh
# Web Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET    | /jogo/simulador
+--------+-------------------------+

```