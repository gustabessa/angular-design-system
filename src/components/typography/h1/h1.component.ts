import { Component } from '@angular/core';

@Component({
  selector: 'ds-h1',
  standalone: true,
  template: `
    <h1
      class="text-contrast mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6x"
    >
      <ng-content></ng-content>
    </h1>
  `,
})
export class H1Component {}
