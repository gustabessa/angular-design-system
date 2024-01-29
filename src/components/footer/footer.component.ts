import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'ds-footer',
  standalone: true,
  imports: [DividerComponent, IconComponent],
  template: `
    <ds-divider spacingTop="2rem"></ds-divider>
    <footer class="py-4">
      <a href="https://github.com/gustabessa" target="_blank">
        <span
          class="flex items-center justify-center text-contrast-300 underline decoration-solid"
        >
          developed by gustabessa
          <ds-icon class="ml-2" icon="assets/github.svg"></ds-icon>
        </span>
      </a>
    </footer>
  `,
})
export class FooterComponent {}
