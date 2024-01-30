import { Component, input } from '@angular/core';

@Component({
  selector: 'ds-p',
  standalone: true,
  template: `
    <p
      class="text-contrast lg:mb-2 max-lg:mb-4 text-lg color-transition-ease"
      [class]="class()"
    >
      <ng-content></ng-content>
    </p>
  `,
})
export class PComponent {
  class = input('');
}
