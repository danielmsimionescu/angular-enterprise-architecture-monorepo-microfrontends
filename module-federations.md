Introduce a Shell Using Native Federation

Goal:

Create a host (shell) application that orchestrates:

catalog-ssr

cart-spa

profile-spa

Using @angular-architects/native-federation instead of Webpack Module Federation.

The existing apps must continue to run independently.

Step 1 — Validate Workspace

Agent must confirm the workspace contains:

apps/
  catalog-ssr
  cart-spa
  profile-spa

If any are missing:

STOP

Also confirm the workspace uses:

Nx (build system)

Angular

Step 2 — Install Native Federation

Install federation tooling.

npm install @angular-architects/native-federation --save-dev

Verify installation.

Expected:

node_modules/@angular-architects/native-federation
Step 3 — Generate Shell Application

Create a new Angular app.

nx g @nx/angular:application shell-host \
  --routing \
  --style=scss \
  --standalone

Expected structure:

apps/
  shell-host/

Default port later:

4300
Step 4 — Convert Shell to Federation Host

Initialize federation for the shell.

Run:

ng g @angular-architects/native-federation:init \
  --project shell-host \
  --type host

This generates:

apps/shell-host/federation.config.js
apps/shell-host/src/bootstrap.ts
Step 5 — Convert Existing Apps to Remotes

Each existing app becomes a federated remote.

Agent must run:

catalog
ng g @angular-architects/native-federation:init \
  --project catalog-ssr \
  --type remote
cart
ng g @angular-architects/native-federation:init \
  --project cart-spa \
  --type remote
profile
ng g @angular-architects/native-federation:init \
  --project profile-spa \
  --type remote

Expected result:

Each app gains:

federation.config.js
bootstrap.ts
Step 6 — Configure Remote Entry URLs

Edit:

apps/shell-host/federation.config.js

Define remotes:

remotes: {
  catalog: 'http://localhost:4200/remoteEntry.json',
  cart: 'http://localhost:4201/remoteEntry.json',
  profile: 'http://localhost:4202/remoteEntry.json'
}
Step 7 — Expose Remote Modules

Agent must expose root routes.

Example for catalog-ssr.

Edit:

apps/catalog-ssr/federation.config.js

Expose:

exposes: {
  './routes': './src/app/app.routes.ts'
}

Repeat for:

cart-spa
profile-spa
Step 8 — Configure Shell Routing

Edit:

apps/shell-host/src/app/app.routes.ts

Add lazy federation routes.

Example:

{
  path: 'solar-panels',
  loadChildren: () =>
    loadRemoteModule('catalog', './routes')
}

{
  path: 'cart',
  loadChildren: () =>
    loadRemoteModule('cart', './routes')
}

{
  path: 'profile',
  loadChildren: () =>
    loadRemoteModule('profile', './routes')
}
Step 9 — Configure Dev Ports

Ensure each project runs on a predictable port.

Update project.json serve options.

catalog-ssr → 4200
cart-spa → 4201
profile-spa → 4202
shell-host → 4300
Step 10 — Shared UI Libraries

Agent must NOT duplicate layout components.

Shared UI lives in:

libs/ui
libs/design-system

Recommended components:

header
footer
navigation
layout
product-card

All apps import from:

@agent-monorepo/ui
Step 11 — Development Workflow

Developers should start apps separately.

Terminal example:

nx serve catalog-ssr
nx serve cart-spa
nx serve profile-spa
nx serve shell-host

User visits:

http://localhost:4300

Shell dynamically loads remotes.

Step 12 — Verify Federation

Agent must test:

http://localhost:4300/solar-panels

Expected:

catalog-ssr content rendered

Test:

/cart
/profile
Expected Final Architecture
apps/

shell-host        (orchestrator)

catalog-ssr       (SEO pages)
cart-spa          (shopping cart)
profile-spa       (account)

libs/

ui
design-system

Runtime flow:

User → shell-host
      → loads catalog remote
      → loads cart remote
      → loads profile remote
Important Constraints for the Agent

Agent must ensure:

existing apps continue running standalone
no folder structure changes
libs remain shared

Federation only adds orchestration.