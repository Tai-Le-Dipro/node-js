# Guideline for Next.js Project 👋

<p align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
    <h1 align="center">Next.js</h1>
  </a>
</p>

## Purpose
This guide is intended to provide guidance to high-performance, safe, and maintainable HomePage project team members. Guide to running source code, best practices, and standards to ensure project consistency and performance.
## Contents
1. ``Usage``
2. ``Pre-requisites``


## Usage

Create .env file base on .env.example then run below command

### Pull Source Code
* #### https:
```sh
git clone "https://github.com/dipro-vn/homepage-rebuild.git"
```

* #### zsh:
```sh
git clone "git@github.com:dipro-vn/homepage-rebuild.git"
```
* #### Move into project folder
```sh
cd <project_directory>
```

### Accessing your database with Prisma Client

* #### Generating Prisma Client
Note that the installation of this package invokes the `prisma generate` command which reads your Prisma schema and _generates_ the Prisma Client code. The code will be located in `node_modules/.prisma/client`, which is exported by `node_modules/@prisma/client/index.d.ts`.

After you change your data model, you'll need to manually re-generate Prisma Client to ensure the code inside `node_modules/.prisma/client` get updated:

```sh
npx prisma generate
```

Refer to the documentation for more information about ["generating the Prisma client"](https://www.prisma.io/docs/concepts/components/prisma-client/generating-prisma-client).

## Pre-requisites

<mark>Create .env file base on .env.example. Replace the DATABASE_URL to match with your local database server before go to next steps.</mark>

## Default users

These are the default users that are created when you seed the database.

Admin
> Email: admin@example.com <br>
> Password: 123456Aa

<br>
## Basic commands

Don't use `npm` to install packages. Use `yarn` instead.

### Install

```sh
yarn install
```

### Run local
```sh
yarn dev
```

### Run build
```sh
yarn build
```

<br>

## Database commands

### Create migration

*Your need to contact database admin to create a new migration.*

### Update database

```sh
yarn db:push
```

### Seed database

```sh
yarn seed
```

### Reset database

Use this command to reset database and seed it again.

```sh
yarn db:reset
```