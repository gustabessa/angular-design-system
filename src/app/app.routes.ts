import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@pages').then((x) => x.HomePageComponent),
  },
  {
    path: 'components',
    loadChildren: () => [
      {
        path: 'icon',
        loadComponent: () => import('@pages').then((x) => x.IconPageComponent),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('@pages').then((x) => x.NotFoundPageComponent),
  },
];
