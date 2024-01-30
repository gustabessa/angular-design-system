import { Component, inject } from '@angular/core';
import { DividerComponent, IMenuItem, MenuItemComponent } from '@components';
import { RouterSignalStore } from '../router/router.signal-store';
import { LayoutStore } from '../layout/layout.signal-store';

@Component({
  selector: 'ds-menu',
  standalone: true,
  imports: [MenuItemComponent, DividerComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  routerSignalStore = inject(RouterSignalStore);

  layoutStore = inject(LayoutStore);

  menuItems: IMenuItem[] = [
    {
      icon: 'assets/home.svg',
      route: '/',
      label: 'Home',
    },
    {
      icon: 'assets/source-code.svg',
      route: 'https://github.com/gustabessa/angular-design-system',
      label: 'Ver código fonte',
    },
  ];
}
