import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { IMenuItem } from './types';
import { IconComponent } from '../icon/icon.component';
import { DividerComponent } from '../divider/divider.component';

type MenuType = 'dropdown' | 'route' | 'external-link';

@Component({
  selector: 'ds-menu-item',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent,
    RouterModule,
    NgTemplateOutlet,
    DividerComponent,
  ],
  template: `
    @switch(menuType()) { @case('external-link') {
    <a
      [href]="menuItem().route"
      class="group p-2 flex flex-row items-center"
      target="_blank"
    >
      <ng-container [ngTemplateOutlet]="menuItemContent"></ng-container>
    </a>
    } @case('route') {
    <a
      [routerLink]="[menuItem().route]"
      class="group p-2 flex flex-row items-center"
      [class]="isActive() ? 'is-active' : ''"
      (click)="itemSelected.emit()"
    >
      <ng-container [ngTemplateOutlet]="menuItemContent"></ng-container>
    </a>
    } @case('dropdown') {
    <div class="relative">
      <ds-button
        [isActive]="isActive()"
        (click)="itemSelected.emit()"
        class="group"
      >
        <div class="w-full flex flex-row justify-between">
          <div class="flex flex-row">
            <ng-container [ngTemplateOutlet]="menuItemContent"></ng-container>
          </div>
          @if (menuItem().isExpanded) {
          <ds-icon icon="assets/square-arrow-up.svg"></ds-icon>
          } @else {
          <ds-icon icon="assets/square-arrow-down.svg"></ds-icon>
          }
        </div>
      </ds-button>
      <div
        class="w-full flex justify-end"
        [class]="menuItem().isExpanded ? 'visible' : 'hidden'"
      >
        <div class="w-[90%]">
          <ds-divider spacing="0.5em"></ds-divider>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
    } }
    <ng-template #menuItemContent>
      <ds-icon [icon]="menuItem().icon"></ds-icon>
      <span
        class="ml-4 text-contrast text-lg group-hover:text-secondary group-[.is-active]:text-secondary"
        >{{ menuItem().label }}</span
      >
    </ng-template>
  `,
})
export class MenuItemComponent {
  menuItem = input.required<IMenuItem>();

  menuType = computed((): MenuType => {
    if (this.menuItem().children) {
      return 'dropdown';
    }
    if (this.menuItem().route?.startsWith('http')) {
      return 'external-link';
    }
    return 'route';
  });

  isActive = input.required<boolean>();

  @Output() itemSelected = new EventEmitter<void>();
}
