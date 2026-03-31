import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'solar-panels',
    pathMatch: 'full',
  },
  {
    path: 'solar-panels',
    loadComponent: () =>
      import('./pages/solar-panels').then((m) => m.SolarPanels),
  },
  {
    path: 'inverters',
    loadComponent: () =>
      import('./pages/inverters').then((m) => m.Inverters),
  },
  {
    path: 'product/:slug',
    loadComponent: () =>
      import('./pages/product-detail').then((m) => m.ProductDetail),
  },
];
