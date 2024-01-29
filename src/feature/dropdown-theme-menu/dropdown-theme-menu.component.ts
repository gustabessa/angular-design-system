import { Component, HostListener, inject } from '@angular/core';
import { DropdownThemeMenuStore } from './dropdown-theme-menu.signal-store';
import {
  ButtonComponent,
  DropdownMenuComponent,
  IconComponent,
} from '../../components';

@Component({
  selector: 'ds-dropdown-theme-menu',
  standalone: true,
  imports: [ButtonComponent, DropdownMenuComponent, IconComponent],
  template: `
    <div class="relative">
      <ds-button
        [isActive]="dropdownMenuThemeStore.isThemeOpen()"
        (click)="dropdownMenuThemeStore.toggleThemeMenu()"
      >
        <ds-icon icon="assets/paint-palette.svg"></ds-icon>
      </ds-button>
      <ds-dropdown-menu
        [selectedItem]="dropdownMenuThemeStore.selectedThemeMenuItem()"
        [isOpen]="dropdownMenuThemeStore.isThemeOpen()"
        [items]="dropdownMenuThemeStore.themeMenuItems()"
        (itemSelected)="dropdownMenuThemeStore.applyTheme($event.data)"
      ></ds-dropdown-menu>
    </div>
  `,
})
export class DropdownThemeMenuComponent {
  dropdownMenuThemeStore = inject(DropdownThemeMenuStore);

  @HostListener('document:click')
  onDocumentClick() {
    this.dropdownMenuThemeStore.toggleThemeMenu(false);
  }
}
