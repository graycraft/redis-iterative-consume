# Redis Iterative Consume

## Requirements

Node.js 22.15.1, NPM 10.9.2:

```bash
$ node -v; npm -v
  v22.15.1
  10.9.2
```

Redis Server ^6:

```bash
$ redis-server -v
  Redis server v=6.0.16 sha=00000000:0 malloc=jemalloc-5.2.1 bits=64 build=5920fd489a30de50
```

## Setup

### Git

Clone the Git repository:

```bash
$ repository=redis-iterative-consume
$ git clone <gh|https|ssh>graycraft/$repository.git; cd $repository
```

### Node.js

Use appropriate Node.js version:

```bash
$ nvm use
  Found '/redis-iterative-consume/.nvmrc' with version <v22.15.1>
  Now using node v22.15.1 (npm v10.9.2)
```

### NPM

Install packages:

```bash
$ npm i
```

### Environment

Optionally `NODE_NO_WARNINGS` can be exported from `.env` file to silence process warnings regarding experimental features:

```bash
$ export $(cat .env | xargs)
```

## Usage

```bash
$ npm run redis:server
$ npm run node:app
```
