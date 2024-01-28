import { Component, input } from '@angular/core';

type GradientType = 'angular';

@Component({
  selector: 'ds-text-gradient',
  standalone: true,
  template: `
    <span
      class="text-transparent bg-clip-text bg-gradient-to-r"
      [class]="gradients[type()]"
    >
      <ng-content></ng-content>
    </span>
  `,
})
export class TextGradientComponent {
  type = input.required<GradientType>();

  gradients: Record<GradientType, string> = {
    angular: 'from-red-500 to-violet-700',
  };
}
