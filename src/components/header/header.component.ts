import { Component, EventEmitter, Output, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'ds-header',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  image = input<string>();

  @Output() menuOpen = new EventEmitter<void>();
}
