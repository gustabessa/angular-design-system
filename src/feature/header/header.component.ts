import { Component, EventEmitter, Output, input } from '@angular/core';
import {
  ButtonComponent,
  DropdownMenuComponent,
  IconComponent,
} from '@components';
import { DropdownThemeMenuComponent } from '../dropdown-theme-menu/dropdown-theme-menu.component';

@Component({
  selector: 'ds-header',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent,
    DropdownMenuComponent,
    DropdownThemeMenuComponent,
  ],
  template: `
    <header class="bg-primary w-full flex justify-between px-4 py-2">
      <div class="flex flex-row">
        <ds-button [isActive]="isMenuOpen()" (click)="menuOpen.emit()">
          <ds-icon icon="assets/menu.svg"></ds-icon>
        </ds-button>
        @if (image(); as image) {
        <img class="h-[50px] ml-8" alt="Logotipo" [src]="image" />
        }
      </div>
      <ds-dropdown-theme-menu></ds-dropdown-theme-menu>
    </header>
  `,
})
export class HeaderComponent {
  constructor() {}

  image = input<string>();

  isMenuOpen = input.required<boolean>();

  @Output() menuOpen = new EventEmitter<void>();
}
