# DOCKER API

![Badge](https://img.shields.io/static/v1?label=author&message=DanielHessel&color=0070f3&style=flat&logo=<LOGO>)
![Badge](https://img.shields.io/static/v1?label=status&message=Done&color=success&style=flat&logo=<LOGO>)
![Badge](https://img.shields.io/static/v1?label=license&message=MIT&color=0070f3&style=flat&logo=<LOGO>)

An api with Node.js and TypeScript that handles Docker container management.

## :pushpin: Table of contents

<!--ts-->

- [Technologies](#zap-technologies)
- [Getting started](#computer-getting-started)
- [How to run](#information_source-how-to-run)
- [How to contribute to the project](#tada-how-to-contribute-to-the-project)
- [License](#page_facing_up-license)

<!--te-->

## :zap: Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Dockerode](https://github.com/apocas/dockerode)

## :computer: Getting started

Before you begin, you will need to have the following tools installed on your
machine:

- [Git](https://git-scm.com)

The project can be built with npm or yarn, so choose one of the approach bellow
in case you don't have any installed on your system.

Npm is distributed with Node.js which means that when you download Node.js, you
automatically get npm installed on your computer.

- [Node.js v22.11.0](https://nodejs.org/) or heigher.

Also, it’s good to have an editor to work with the code like
[VSCode](https://code.visualstudio.com/).

## :information_source: How to run

Follow the instructions below to download and use the project from this
repository:

> You can use yarn or npm as package manager to run this project, but preferably
> I use npm.

Clone this repository using SSH:

```bash
git clone git@github.com:danielhessell/docker-api.git
```

Go to project folder in terminal/cmd:

```bash
cd docker-api
```

Install dependencies:

```bash
npm install
```

> Remember to copy the .env.example file to an .env file, changing the
> information according to your environment.

Run project:

```bash
npm run dev
```

The server will start on port 8081. Go to http://localhost:8081.

## :tada: How to contribute to the project

1. Fork the project
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save the changes and create a commit message telling what you've done:
   `git commit -m "feature: My new feature"`
4. Submit your changes: `git push origin my-feature`

If you have any questions, check this out
[guide on how to contribute to GitHub](https://github.com/firstcontributions/first-contributions).

## :page_facing_up: License

This project is under the MIT license. See the
[LICENSE](https://github.com/danielhessell/docker-api/blob/master/LICENSE)
file for more details.

---

Made by Daniel Hessel.
