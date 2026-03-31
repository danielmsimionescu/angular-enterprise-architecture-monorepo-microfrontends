# Workspace Structure

```
c:\_SELF\agent-monorepo
+--- .vscode
|   \--- tasks.json
+--- apps
|   +--- cart-spa
|   |   +--- public
|   |   |   \--- favicon.ico
|   |   +--- src
|   |   |   +--- app
|   |   |   |   +--- pages
|   |   |   |   |   +--- cart.html
|   |   |   |   |   +--- cart.scss
|   |   |   |   |   \--- cart.ts
|   |   |   |   +--- remote-entry
|   |   |   |   |   \--- routes.ts
|   |   |   |   +--- app.config.ts
|   |   |   |   +--- app.html
|   |   |   |   +--- app.routes.ts
|   |   |   |   +--- app.scss
|   |   |   |   +--- app.ts
|   |   |   |   \--- nx-welcome.ts
|   |   |   +--- bootstrap.ts
|   |   |   +--- index.html
|   |   |   +--- main.ts
|   |   |   \--- styles.scss
|   |   +--- eslint.config.mjs
|   |   +--- federation.config.js
|   |   +--- project.json
|   |   +--- tsconfig.app.json
|   |   \--- tsconfig.json
|   +--- catalog-ssr
|   |   +--- public
|   |   |   \--- favicon.ico
|   |   +--- src
|   |   |   +--- app
|   |   |   |   +--- pages
|   |   |   |   |   +--- inverters.html
|   |   |   |   |   +--- inverters.scss
|   |   |   |   |   +--- inverters.ts
|   |   |   |   |   +--- product-detail.html
|   |   |   |   |   +--- product-detail.scss
|   |   |   |   |   +--- product-detail.ts
|   |   |   |   |   +--- solar-panels.html
|   |   |   |   |   +--- solar-panels.scss
|   |   |   |   |   \--- solar-panels.ts
|   |   |   |   +--- remote-entry
|   |   |   |   |   \--- routes.ts
|   |   |   |   +--- app.config.server.ts
|   |   |   |   +--- app.config.ts
|   |   |   |   +--- app.html
|   |   |   |   +--- app.routes.server.ts
|   |   |   |   +--- app.routes.ts
|   |   |   |   +--- app.scss
|   |   |   |   +--- app.ts
|   |   |   |   \--- nx-welcome.ts
|   |   |   +--- bootstrap-server.ts
|   |   |   +--- bootstrap.ts
|   |   |   +--- index.html
|   |   |   +--- main.server.ts
|   |   |   +--- main.ts
|   |   |   +--- server.ts
|   |   |   \--- styles.scss
|   |   +--- eslint.config.mjs
|   |   +--- federation.config.js
|   |   +--- project.json
|   |   +--- tsconfig.app.json
|   |   \--- tsconfig.json
|   +--- profile-spa
|   |   +--- public
|   |   |   \--- favicon.ico
|   |   +--- src
|   |   |   +--- app
|   |   |   |   +--- pages
|   |   |   |   |   +--- orders.html
|   |   |   |   |   +--- orders.scss
|   |   |   |   |   +--- orders.ts
|   |   |   |   |   +--- profile.html
|   |   |   |   |   +--- profile.scss
|   |   |   |   |   +--- profile.ts
|   |   |   |   |   +--- settings.html
|   |   |   |   |   +--- settings.scss
|   |   |   |   |   \--- settings.ts
|   |   |   |   +--- remote-entry
|   |   |   |   |   \--- routes.ts
|   |   |   |   +--- app.config.ts
|   |   |   |   +--- app.html
|   |   |   |   +--- app.routes.ts
|   |   |   |   +--- app.scss
|   |   |   |   +--- app.ts
|   |   |   |   \--- nx-welcome.ts
|   |   |   +--- bootstrap.ts
|   |   |   +--- index.html
|   |   |   +--- main.ts
|   |   |   \--- styles.scss
|   |   +--- eslint.config.mjs
|   |   +--- federation.config.js
|   |   +--- project.json
|   |   +--- tsconfig.app.json
|   |   \--- tsconfig.json
|   \--- shell-host
|       +--- public
|       |   \--- favicon.ico
|       +--- src
|       |   +--- app
|       |   |   +--- app.config.ts
|       |   |   +--- app.html
|       |   |   +--- app.routes.ts
|       |   |   +--- app.scss
|       |   |   +--- app.ts
|       |   |   \--- nx-welcome.ts
|       |   +--- bootstrap.ts
|       |   +--- index.html
|       |   +--- main.ts
|       |   \--- styles.scss
|       +--- eslint.config.mjs
|       +--- federation.config.js
|       +--- project.json
|       +--- tsconfig.app.json
|       \--- tsconfig.json
+--- libs
|   +--- design-system
|   |   +--- src
|   |   |   +--- lib
|   |   |   |   \--- design-system
|   |   |   |       +--- design-system.html
|   |   |   |       +--- design-system.scss
|   |   |   |       \--- design-system.ts
|   |   |   \--- index.ts
|   |   +--- eslint.config.mjs
|   |   +--- project.json
|   |   +--- README.md
|   |   +--- tsconfig.json
|   |   \--- tsconfig.lib.json
|   \--- ui
|       +--- src
|       |   +--- lib
|       |   |   \--- ui
|       |   |       +--- ui.html
|       |   |       +--- ui.scss
|       |   |       \--- ui.ts
|       |   \--- index.ts
|       +--- eslint.config.mjs
|       +--- project.json
|       +--- README.md
|       +--- tsconfig.json
|       \--- tsconfig.lib.json
+--- tools
|   \--- generate-tree.ps1
+--- .gitignore
+--- .prettierignore
+--- .prettierrc
+--- eslint.config.mjs
+--- Idea.md
+--- module-federations.md
+--- nx.json
+--- package.json
+--- plan.md
+--- project.json
+--- Structure.md
\--- tsconfig.base.json
```

> Excluded: `node_modules/`, `.angular/`, `.nx/`, `dist/`, `.git/`, `static/`, `graph.html`, `package-lock.json`
