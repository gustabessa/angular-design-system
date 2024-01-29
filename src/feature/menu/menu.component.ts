import { Component, inject } from '@angular/core';
import { DividerComponent, IMenuItem, MenuItemComponent } from '@components';
import { RouterSignalStore } from '../router/router.signal-store';

@Component({
  selector: 'ds-menu',
  standalone: true,
  imports: [MenuItemComponent, DividerComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  routerSignalStore = inject(RouterSignalStore);

  menuItems: IMenuItem[] = [
    {
      icon: 'assets/home.svg',
      route: '/',
      label: 'Home',
    },
  ];
}
