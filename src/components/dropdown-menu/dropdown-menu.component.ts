import { Component, EventEmitter, Output, input } from '@angular/core';
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
export class DropdownMenuComponent<T> {
  isOpen = input(false);

  items = input<IDropdownMenuItem<T>[]>([]);

  selectedItem = input<IDropdownMenuItem<T>>();

  @Output() itemSelected = new EventEmitter<IDropdownMenuItem<T>>();
}
