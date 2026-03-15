# Solar Commerce Angular Platform

Enterprise **Angular micro-frontend platform** built with **Nx monorepo**, **Module Federation**, and **SSR**.

This project demonstrates how large Angular applications can be structured using **domain-driven architecture**, **independent micro-frontends**, and **shared design systems**.

The platform simulates an **e-commerce system for photovoltaic equipment** including solar panels, inverters, carts, and user accounts.

It serves as a **reference architecture for enterprise Angular applications**.

---

# Architecture Overview

This workspace follows **modern enterprise frontend architecture patterns**:

- **Nx Monorepo**
- **Micro-frontends**
- **Module Federation**
- **Angular SSR**
- **Domain-based application boundaries**
- **Shared design system libraries**

The system is composed of a **shell application** that dynamically loads **remote applications**.

```
                ┌───────────────────────┐
                │      shell-host       │
                │   (application host)  │
                └───────────┬───────────┘
                            │
        ┌───────────────┬───────────────┬───────────────┐
        │               │               │               │
   catalog-ssr      cart-spa        profile-spa      shared libs
   storefront       shopping        user account
   SSR remote       cart remote     remote

```

Each remote owns its **routes, domain logic, and UI**.

---

# Micro-Frontend Applications

## Shell Host

Entry application responsible for composing all remotes.

Responsibilities:

- UI composition
- global navigation
- remote loading
- route orchestration

Port:

```
http://localhost:4300
```

---

## Catalog (SSR)

Server-side rendered storefront application.

Responsibilities:

- solar panel catalog
- inverter catalog
- product pages
- SEO-friendly SSR

Port:

```
http://localhost:4200
```

---

## Cart

Shopping cart micro-frontend.

Responsibilities:

- cart management
- checkout preparation
- cart UI

Port:

```
http://localhost:4201
```

---

## Profile

User account management.

Responsibilities:

- profile management
- order history
- account settings

Port:

```
http://localhost:4202
```

---

# Workspace Structure

The project is organized as an **Nx monorepo** with **apps** and **libraries**.

```
apps/
  shell-host        → application shell
  catalog-ssr       → storefront (SSR)
  cart-spa          → shopping cart
  profile-spa       → user profile

libs/
  design-system     → reusable UI primitives
  ui                → shared components

tools/
  scripts and utilities
```

This separation allows **clear domain ownership and scalable development**.

---

# Module Federation Integration

The shell dynamically loads each remote via **Module Federation**.

Example configuration:

```ts
initFederation({
  catalog: 'http://localhost:4200/remoteEntry.json',
  cart: 'http://localhost:4201/remoteEntry.json',
  profile: 'http://localhost:4202/remoteEntry.json'
})
```

Routes are lazily loaded from each remote:

```ts
loadRemoteModule('catalog', './routes').then((m) => m.routes)
loadRemoteModule('cart', './routes').then((m) => m.routes)
loadRemoteModule('profile', './routes').then((m) => m.routes)
```

Each remote exposes its route configuration through:

```
./remote-entry/routes.ts
```

This allows **independent development and deployment** of each micro-frontend.

---

# Technology Stack

## Frontend

- Angular 17+
- TypeScript
- RxJS

## Architecture

- Nx Monorepo
- Micro-frontends
- Module Federation

## UI

- Angular standalone components
- shared design system

## Rendering

- Angular SSR

## Tooling

- ESLint
- Prettier
- Nx CLI

---

# Running the Platform

Start all applications in parallel:

```
npx nx run-many --target=serve --projects=catalog-ssr,cart-spa,profile-spa,shell-host --parallel=4
```

Open:

```
http://localhost:4300
```

The shell application will dynamically load the remotes.

---

# What This Repository Demonstrates

This project demonstrates patterns used in **large enterprise Angular applications**:

- scalable **monorepo architecture**
- **micro-frontend decomposition**
- **independent domain ownership**
- **shared UI libraries**
- **SSR storefront**
- **dynamic runtime composition**

These patterns are commonly used in **large scale frontend platforms and e-commerce systems**.

---

# Future Improvements

Planned additions to this architecture:

- NgRx state management
- Angular Signals integration
- Cypress end-to-end testing
- Docker containerization
- CI pipelines with GitHub Actions
- Kubernetes deployment examples

---

# Author

Built as part of an **Angular enterprise architecture portfolio project**.

---

If you want, I can also show you **3 small additions that will massively impress recruiters**, like:

- a **visual architecture diagram**
- an **Nx dependency graph**
- an **Architecture Decision Record (ADR)** folder

These make the repo look like it came from a **real enterprise team** rather than a demo.
