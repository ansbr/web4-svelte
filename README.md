# Svelte + Web4

This template should help get you started developing with Svelte and Web4 for Near Protocol.

## Recommended Setup

[Node.js](https://nodejs.org/en/) + [Near Cli](https://docs.near.org/docs/tools/near-cli#installation).

## What is Web4 Framework?

Check out [Web4](https://github.com/vgrichina/web4), which is also powered by Near Protocol Team. Deployment front-end applications in new way.

## What is Svelte starter for Web4?
Out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, Bootstrap, and more

## How it working (YARN)?
- `yarn install`
- `yarn dev` for developing

**Then deploy application**
- `yarn build`
- `yarn asb`
- `near login`
- `near deploy --accountId youglogin.testnet --wasmFile build/release/web4ts.wasm`

## How it working (NPM)?
- `npm install`
- `npm run dev` for developing

**Then deploy application**
- `npm run build`
- `npm run asb`
- `near login`
- `near deploy --accountId youglogin.testnet --wasmFile build/release/web4ts.wasm`
