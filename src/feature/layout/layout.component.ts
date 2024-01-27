import { Component, inject } from '@angular/core';
import { HeaderComponent } from '@components';
import { IconButtonComponent } from '../../components/icon-button/icon-button.component';
import { LayoutStore } from './layout.signal-store';

@Component({
  selector: 'ds-layout',
  standalone: true,
  imports: [HeaderComponent, IconButtonComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  layoutStore = inject(LayoutStore);
}
