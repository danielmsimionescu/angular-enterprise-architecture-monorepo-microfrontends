1. Preconditions the Agent Must Verify

Before modifying the repo, validate:

1.1 Workspace detection

Confirm repository uses:

Nx (build system) workspace

package manager (npm / pnpm / yarn)

Check files:

nx.json
workspace.json or project.json
package.json
1.2 Detect existing frameworks

Scan dependencies:

package.json

Look for:

Angular

React

Next.js

Webpack

Agent decision rule:

IF Angular exists
    use Angular microfrontends
ELSE
    add Angular support
1.3 Check Nx plugins

Verify installed plugins:

@nx/angular
@nx/react
@nx/webpack
@nx/module-federation

If missing:

nx add @nx/angular
nx add @nx/webpack
2. Target Architecture

Agent must implement this structure:

apps/

shell-host
catalog-ssr
product-ssr
cart-spa
profile-spa
checkout-spa

libs/

ui
design-system
product-data
cart-state
auth
api-client
utils

Architecture responsibilities:

shell-host → orchestrates microfrontends

catalog-ssr → SEO category pages
product-ssr → SEO product page

cart-spa → shopping cart UI
profile-spa → user profile
checkout-spa → checkout flow
3. Step 1 — Create Host Application

Agent must generate host container.

Command:

nx g @nx/angular:host shell-host \
--remotes=catalog-ssr,cart-spa,profile-spa \
--style=scss \
--routing

Responsibilities:

shell-host
- root router
- layout
- navigation
- remote loading

Routes to create:

/solar-panels
/inverters
/product/:slug
/cart
/profile
/checkout
4. Step 2 — Create SEO Catalog Microfrontend

Generate SSR-enabled Angular app.

nx g @nx/angular:remote catalog-ssr \
--host=shell-host \
--routing \
--ssr

Responsibilities:

category pages
product listings
SEO metadata
structured data

Routes:

/solar-panels
/inverters
/batteries
/mounting-systems

SEO requirements:

Agent must add:

meta tags
canonical URLs
OpenGraph
schema.org Product
5. Step 3 — Create Product Page Microfrontend

Optional but recommended.

nx g @nx/angular:remote product-ssr \
--host=shell-host \
--routing \
--ssr

Routes:

/product/:slug

Example slug:

/product/lg-450w-solar-panel

Responsibilities:

product gallery
specifications
pricing
add-to-cart action
reviews
6. Step 4 — Create Cart SPA

Cart does NOT require SSR.

Generate SPA remote:

nx g @nx/angular:remote cart-spa \
--host=shell-host \
--routing

Routes:

/cart

Responsibilities:

cart list
quantity controls
remove items
price totals

State should be stored in shared library:

libs/cart-state
7. Step 5 — Create Profile SPA

Generate remote:

nx g @nx/angular:remote profile-spa \
--host=shell-host \
--routing

Routes:

/profile
/orders
/settings

Responsibilities:

user profile
order history
addresses
saved payment methods
8. Step 6 — Create Checkout SPA

Generate:

nx g @nx/angular:remote checkout-spa \
--host=shell-host \
--routing

Routes:

/checkout

Responsibilities:

shipping address
payment
order confirmation
9. Step 7 — Create Shared Libraries

Agent must generate shared libraries.

UI Components
nx g @nx/angular:lib ui

Components:

product-card
price-display
rating-stars
add-to-cart-button
Design System
nx g @nx/angular:lib design-system

Includes:

theme
typography
spacing
colors
Product Data
nx g @nx/angular:lib product-data

Responsibilities:

product models
API services
product store
Cart State
nx g @nx/angular:lib cart-state

State must support:

add item
remove item
update quantity
persist cart

Persistence:

localStorage
API Client
nx g @nx/angular:lib api-client

Endpoints:

products
orders
customers
cart
10. Step 8 — Configure Module Federation Sharing

Edit webpack configs.

Share core dependencies.

Example:

shared: {
 "@angular/core": { singleton: true, strictVersion: true },
 "@angular/common": { singleton: true },
 "@angular/router": { singleton: true }
}

Also share internal libs:

libs/ui
libs/cart-state
libs/product-data
11. Step 9 — Routing Integration

Modify host routing.

Example:

{
 path: "solar-panels",
 loadChildren: () =>
   import("catalog-ssr/Module").then(m => m.RemoteEntryModule)
}

{
 path: "cart",
 loadChildren: () =>
   import("cart-spa/Module").then(m => m.RemoteEntryModule)
}
12. Step 10 — SEO Enhancements

Agent must add:

Structured data
Product schema
Offer schema
Breadcrumb schema
Example JSON-LD
{
 "@type": "Product",
 "name": "LG 450W Solar Panel",
 "offers": {
   "@type": "Offer",
   "price": "220"
 }
}
13. Step 11 — Performance Optimizations

Agent must implement:

Shared framework

Ensure Angular is singleton.

Lazy loading

All remotes lazy-loaded.

CDN remote loading

Remote URLs configurable:

environment.remoteConfig

Example:

https://cdn.site.com/cart/remoteEntry.js
14. Step 12 — CI/CD Setup

Agent should create pipeline tasks.

Build targets:

nx build shell-host
nx build catalog-ssr
nx build cart-spa
nx build profile-spa
nx build checkout-spa

Deployment:

catalog → CDN /catalog
cart → CDN /cart
profile → CDN /profile
15. Step 13 — Example User Flow

User journey:

Google search
↓
catalog SSR page
↓
click product
↓
product SSR page
↓
add to cart
↓
cart SPA loads
↓
checkout SPA
16. Final Architecture Diagram
                shell-host
                     |
    ----------------------------------------
    |            |           |             |
 catalog-ssr   product     cart-spa    profile-spa
  (SEO)         (SEO)       (SPA)        (SPA)

Shared:

libs/ui
libs/product-data
libs/cart-state
libs/api-client