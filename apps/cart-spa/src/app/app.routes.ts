import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full',
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart').then((m) => m.Cart),
  },
];
