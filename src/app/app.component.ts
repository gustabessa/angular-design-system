import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '@feature';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  template: `
    <ds-layout>
      <router-outlet />
    </ds-layout>
  `,
})
export class AppComponent {}
