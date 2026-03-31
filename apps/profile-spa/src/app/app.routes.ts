import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile').then((m) => m.Profile),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./pages/orders').then((m) => m.Orders),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings').then((m) => m.Settings),
  },
];
