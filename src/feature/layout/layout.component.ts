import { Component, inject } from '@angular/core';
import {
  HeaderComponent,
  DividerComponent,
  DrawerComponent,
} from '@components';
import { LayoutStore } from './layout.signal-store';
import { MediaService } from '@shared/services';

@Component({
  selector: 'ds-layout',
  standalone: true,
  imports: [HeaderComponent, DividerComponent, DrawerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  layoutStore = inject(LayoutStore);

  mediaService = inject(MediaService);
}
