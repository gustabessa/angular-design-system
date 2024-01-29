import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';
import { IDropdownMenuItem } from './types';

@Component({
  selector: 'ds-dropdown-menu',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
})
export class DropdownMenuComponent {
  isOpen = input(false);

  items = input<IDropdownMenuItem[]>([]);
}
