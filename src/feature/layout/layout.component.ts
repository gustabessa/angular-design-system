import { Component } from '@angular/core';
import { HeaderComponent } from '@components';
import { IconButtonComponent } from '../../components/icon-button/icon-button.component';

@Component({
  selector: 'ds-layout',
  standalone: true,
  imports: [HeaderComponent, IconButtonComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
