import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/profile').then((m) => m.Profile),
  },
  {
    path: 'orders',
    loadComponent: () => import('../pages/orders').then((m) => m.Orders),
  },
  {
    path: 'settings',
    loadComponent: () => import('../pages/settings').then((m) => m.Settings),
  },
];
