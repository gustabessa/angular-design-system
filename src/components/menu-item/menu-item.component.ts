import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { IMenuItem } from './types';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'ds-menu-item',
  standalone: true,
  imports: [ButtonComponent, IconComponent, RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  menuItem = input.required<IMenuItem>();

  isActive = input.required<boolean>();
}
