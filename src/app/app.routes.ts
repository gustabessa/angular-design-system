import { Routes } from '@angular/router';
import { HomePageComponent, NotFoundPageComponent } from '@pages';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
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
    component: NotFoundPageComponent,
  },
];
