import { Component, inject, input } from '@angular/core';
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

  menuItems = input.required<IMenuItem[]>();

  onItemSelected(menuItem: IMenuItem) {
    if (!menuItem.children) {
      this.layoutStore.toggleMenu();
      return;
    }

    menuItem.isExpanded = !menuItem.isExpanded;
  }
}
