import { Component, computed, input } from '@angular/core';
import { getThemeColor } from '@shared/functions';
import { ThemeColors, ElementSize } from '@shared/types';

@Component({
  selector: 'ds-icon',
  standalone: true,
  template: `<div id="icon" [style]="inlineStyle()"></div>`,
})
export class IconComponent {
  icon = input.required<string>();

  size = input.required<ElementSize>();

  iconColor = input<ThemeColors>('contrast');

  inlineStyle = computed(
    () => `-webkit-mask: url(${this.icon()}) no-repeat 50% 50%;
            mask: url(${this.icon()}) no-repeat 50% 50%;
            mask-size: cover;
            background-color: ${getThemeColor(this.iconColor)};
            height: ${this.size()};
            width: ${this.size()}`,
  );
}
