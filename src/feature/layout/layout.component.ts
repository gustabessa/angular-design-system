import { Component, inject } from '@angular/core';
import {
  HeaderComponent,
  DividerComponent,
  DrawerComponent,
} from '@components';
import { LayoutStore } from './layout.signal-store';
import { MediaService } from '@shared/services';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'ds-layout',
  standalone: true,
  imports: [HeaderComponent, DividerComponent, DrawerComponent, MenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  layoutStore = inject(LayoutStore);

  mediaService = inject(MediaService);

  onBackdropClicked(event: MouseEvent) {
    if (this.layoutStore.isMenuOpen()) {
      event.stopPropagation();
      this.layoutStore.toggleMenu();
    }
  }
}
