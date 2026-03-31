# Quick Start: How Modules Connect

## 1) What runs in this setup

- Shell host app: shell-host (entry UI that composes remotes) on port 4300.
- Catalog remote: catalog-ssr on port 4200 (SSR-capable remote).
- Cart remote: cart-spa on port 4201.
- Profile remote: profile-spa on port 4202.

Ports are defined in:

- [apps/shell-host/project.json](apps/shell-host/project.json#L30)
- [apps/catalog-ssr/project.json](apps/catalog-ssr/project.json#L32)
- [apps/cart-spa/project.json](apps/cart-spa/project.json#L30)
- [apps/profile-spa/project.json](apps/profile-spa/project.json#L30)

## 2) How to run

Fastest single command (one terminal, parallel):

~~~cmd
npx nx run-many --target=serve --projects=catalog-ssr,cart-spa,profile-spa,shell-host --parallel=4
~~~

Location: [root/run.md](root/run.md#L38)

VS Code 4-terminal task:

- Run task: Serve all apps (4 terminals)
- Task definition: [.vscode/tasks.json](.vscode/tasks.json#L57)

Individual commands are also listed in [root/run.md](root/run.md#L1) and npm scripts in [package.json](package.json#L7).

After startup, open http://localhost:4300.

## 3) Host to remote wiring (core idea)

The shell host maps remote aliases to each remoteEntry URL:

Source: [apps/shell-host/src/main.ts](apps/shell-host/src/main.ts#L3)

~~~ts
initFederation({
	'catalog': 'http://localhost:4200/remoteEntry.json',
	'cart': 'http://localhost:4201/remoteEntry.json',
	'profile': 'http://localhost:4202/remoteEntry.json'
})
~~~

Then shell routes lazy-load each remote via alias + exposed module key ./routes:

Source: [apps/shell-host/src/app/app.routes.ts](apps/shell-host/src/app/app.routes.ts#L14)

~~~ts
loadRemoteModule('catalog', './routes').then((m) => m.routes)
loadRemoteModule('cart', './routes').then((m) => m.routes)
loadRemoteModule('profile', './routes').then((m) => m.routes)
~~~

## 4) How each remote is exposed

Each remote declares a federation name and exposes ./routes from remote-entry/routes.ts.

Catalog:

- [apps/catalog-ssr/federation.config.js](apps/catalog-ssr/federation.config.js#L4)

~~~js
name: 'catalog-ssr',
exposes: {
	'./routes': './apps/catalog-ssr/src/app/remote-entry/routes.ts',
}
~~~

Cart:

- [apps/cart-spa/federation.config.js](apps/cart-spa/federation.config.js#L4)

~~~js
name: 'cart-spa',
exposes: {
	'./routes': './apps/cart-spa/src/app/remote-entry/routes.ts',
}
~~~

Profile:

- [apps/profile-spa/federation.config.js](apps/profile-spa/federation.config.js#L4)

~~~js
name: 'profile-spa',
exposes: {
	'./routes': './apps/profile-spa/src/app/remote-entry/routes.ts',
}
~~~

## 5) Route ownership in practice

- Catalog owns default storefront routes (solar-panels, inverters, product/:slug).
Source: [apps/catalog-ssr/src/app/remote-entry/routes.ts](apps/catalog-ssr/src/app/remote-entry/routes.ts#L4)
- Cart owns /cart.
Source: [apps/cart-spa/src/app/remote-entry/routes.ts](apps/cart-spa/src/app/remote-entry/routes.ts#L4)
- Profile owns /profile, /profile/orders, /profile/settings.
Source: [apps/profile-spa/src/app/remote-entry/routes.ts](apps/profile-spa/src/app/remote-entry/routes.ts#L4)

That is the full connection model to get started: start all apps, open shell-host, shell loads each remote by alias and consumes its exposed routes.
