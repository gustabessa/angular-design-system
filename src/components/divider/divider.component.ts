import { Component, input, computed } from '@angular/core';
import { ThemeColors, Spacing } from '@shared/types';
import { getThemeColor } from '@shared/functions';

@Component({
  standalone: true,
  selector: 'ds-divider',
  template: ` <hr [style]="inlineStyle()" /> `,
})
export class DividerComponent {
  color = input<ThemeColors>('secondary');

  spacingTop = input<Spacing>();

  spacingBottom = input<Spacing>();

  spacing = input<Spacing>('0px');

  inlineStyle = computed(
    () =>
      `border-color: ${getThemeColor(this.color)}; margin-top: ${
        this.spacingTop() ?? this.spacing()
      }; margin-bottom: ${this.spacingBottom() ?? this.spacing()}`,
  );
}
