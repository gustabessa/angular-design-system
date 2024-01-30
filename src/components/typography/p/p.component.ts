import { Component } from '@angular/core';

@Component({
  selector: 'ds-p',
  standalone: true,
  template: `
    <p class="text-contrast lg:mb-2 max-lg:mb-4 text-lg color-transition-ease">
      <ng-content></ng-content>
    </p>
  `,
})
export class PComponent {}
