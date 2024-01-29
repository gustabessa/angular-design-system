import { Component, inject } from '@angular/core';
import {
  DividerComponent,
  DrawerComponent,
  FooterComponent,
} from '@components';
import { LayoutStore } from './layout.signal-store';
import { MediaService } from '@shared/services';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'ds-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    DividerComponent,
    DrawerComponent,
    MenuComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  layoutStore = inject(LayoutStore);

  mediaService = inject(MediaService);

  onBackdropclick(event: MouseEvent) {
    if (this.layoutStore.isMenuOpen()) {
      event.stopPropagation();
      this.layoutStore.toggleMenu();
    }
  }
}
