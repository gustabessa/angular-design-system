import { Component, input } from '@angular/core';

@Component({
  selector: 'ds-drawer',
  standalone: true,
  imports: [],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  opened = input<boolean>(false);
}
