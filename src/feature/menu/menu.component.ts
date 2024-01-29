import { Component } from '@angular/core';
import { DividerComponent, IMenuItem, MenuItemComponent } from '@components';

@Component({
  selector: 'ds-menu',
  standalone: true,
  imports: [MenuItemComponent, DividerComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  menuItems: IMenuItem[] = [
    {
      icon: 'assets/home.svg',
      route: '/',
      label: 'Home',
    },
  ];
}
