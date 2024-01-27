import {
  Component,
  input,
  computed,
  EventEmitter,
  Output,
} from '@angular/core';
import { ThemeColors } from '@shared/types';
import { getThemeColor } from '@shared/functions';

@Component({
  standalone: true,
  selector: 'ds-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  icon = input.required<string>();

  sizePx = input.required<number>();

  iconColor = input<ThemeColors>('contrast');

  inlineStyle = computed(
    () => `-webkit-mask: url(${this.icon()}) no-repeat 50% 50%;
            mask: url(${this.icon()}) no-repeat 50% 50%;
            mask-size: cover;
            background-color: ${getThemeColor(this.iconColor)};
            height: ${this.sizePx()}px;
            width: ${this.sizePx()}px`,
  );

  @Output() clicked = new EventEmitter<MouseEvent>();
}
