import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { IMenuItem } from './types';
import { IconComponent } from '../icon/icon.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ds-menu-item',
  standalone: true,
  imports: [ButtonComponent, IconComponent, RouterModule, NgTemplateOutlet],
  template: `
    @if(isExternalLink()) {
    <a
      [href]="menuItem().route"
      class="group p-2 flex flex-row items-center"
      target="_blank"
    >
      <ng-container [ngTemplateOutlet]="menuItemContent"></ng-container>
    </a>
    } @else {
    <a
      [routerLink]="[menuItem().route]"
      class="group p-2 flex flex-row items-center"
      [class]="isActive() ? 'is-active' : ''"
      (click)="itemSelected.emit()"
    >
      <ng-container [ngTemplateOutlet]="menuItemContent"></ng-container>
    </a>
    }

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

  isExternalLink = computed(() => this.menuItem().route.startsWith('http'));

  isActive = input.required<boolean>();

  @Output() itemSelected = new EventEmitter<void>();
}
