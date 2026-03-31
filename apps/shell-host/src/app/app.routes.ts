import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'solar-panels',
    pathMatch: 'full',
  },
  // Catalog remote (SSR) — solar-panels, inverters, product/:slug
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule('catalog', './routes').then((m) => m.routes),
  },
  // Cart remote (SPA)
  {
    path: 'cart',
    loadChildren: () =>
      loadRemoteModule('cart', './routes').then((m) => m.routes),
  },
  // Profile remote (SPA) — profile, orders, settings
  {
    path: 'profile',
    loadChildren: () =>
      loadRemoteModule('profile', './routes').then((m) => m.routes),
  },
];
