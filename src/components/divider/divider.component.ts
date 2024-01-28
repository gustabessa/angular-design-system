import { Component, input, computed } from '@angular/core';
import { ThemeColors, ElementSize } from '@shared/types';
import { getThemeColor } from '@shared/functions';

@Component({
  standalone: true,
  selector: 'ds-divider',
  template: ` <hr [style]="inlineStyle()" /> `,
})
export class DividerComponent {
  color = input<ThemeColors>('secondary');

  spacingTop = input<ElementSize>();

  spacingBottom = input<ElementSize>();

  spacing = input<ElementSize>('0px');

  inlineStyle = computed(
    () =>
      `border-color: ${getThemeColor(this.color)}; margin-top: ${
        this.spacingTop() ?? this.spacing()
      }; margin-bottom: ${this.spacingBottom() ?? this.spacing()}`,
  );
}
