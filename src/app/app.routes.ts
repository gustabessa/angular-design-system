import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@pages').then((x) => x.HomeComponent),
  },
  {
    path: '**',
    loadComponent: () => import('@pages').then((x) => x.NotFoundComponent),
  },
];
