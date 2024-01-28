import { Component, inject } from '@angular/core';
import {
  HeaderComponent,
  IconButtonComponent,
  DividerComponent,
} from '@components';
import { LayoutStore } from './layout.signal-store';
import { MediaService } from '@shared/services';

@Component({
  selector: 'ds-layout',
  standalone: true,
  imports: [HeaderComponent, IconButtonComponent, DividerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  layoutStore = inject(LayoutStore);

  mediaService = inject(MediaService);
}
