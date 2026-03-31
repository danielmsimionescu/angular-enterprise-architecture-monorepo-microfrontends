## Default
Use these Nx commands from the repo root:

```cmd
npx nx serve catalog-ssr
npx nx serve cart-spa
npx nx serve profile-spa
npx nx serve shell-host
```

---

If you want the explicit form with target names, these are equivalent:

```cmd
npx nx run catalog-ssr:serve
npx nx run cart-spa:serve
npx nx run profile-spa:serve
npx nx run shell-host:serve
```

---

## Default local ports (from each app `project.json`)

- `catalog-ssr`: `4200`
- `cart-spa`: `4201`
- `profile-spa`: `4202`
- `shell-host`: `4300`

---

## Start all 4 apps with one command (single terminal)

Run this from the repo root:

```cmd
npx nx run-many --target=serve --projects=catalog-ssr,cart-spa,profile-spa,shell-host --parallel=4
```

This starts all 4 apps concurrently in one terminal output stream.

---

## Start all 4 apps with one command (4 terminals)

If you want separate terminals/windows for each app, use this PowerShell command from the repo root:

```powershell
Start-Process pwsh -ArgumentList '-NoExit', '-Command', 'cd "c:\_SELF\agent-monorepo"; npx nx serve catalog-ssr'; Start-Process pwsh -ArgumentList '-NoExit', '-Command', 'cd "c:\_SELF\agent-monorepo"; npx nx serve cart-spa'; Start-Process pwsh -ArgumentList '-NoExit', '-Command', 'cd "c:\_SELF\agent-monorepo"; npx nx serve profile-spa'; Start-Process pwsh -ArgumentList '-NoExit', '-Command', 'cd "c:\_SELF\agent-monorepo"; npx nx serve shell-host'
```

This opens 4 PowerShell terminals, one per application.

---

## Start all 4 apps from VS Code Task Runner

A workspace task is available at `.vscode/tasks.json`.

How to run it:

1. Open VS Code command palette (`Ctrl+Shift+P`) and run `Tasks: Run Task`.
2. Choose `Serve all apps (4 terminals)`.

This launches 4 dedicated terminals in VS Code, one for each app:

- `Serve catalog-ssr` (port `4200`)
- `Serve cart-spa` (port `4201`)
- `Serve profile-spa` (port `4202`)
- `Serve shell-host` (port `4300`)
