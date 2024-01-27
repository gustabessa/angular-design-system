import {
  Component,
  input,
  computed,
  EventEmitter,
  Output,
} from '@angular/core';

type ColorTypes =
  | number
  | 'primary'
  | 'secondary'
  | 'contrast'
  | 'contrast-100'
  | 'contrast-200'
  | 'contrast-300';

@Component({
  standalone: true,
  selector: 'ds-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  icon = input.required<string>();

  sizePx = input.required<number>();

  color = input<ColorTypes>();

  colorValue = computed(() => {
    if (Number.isNaN(Number(this.color()))) {
      return `var(--${this.color()})`;
    }
    return this.color();
  });

  inlineStyle = computed(
    () => `-webkit-mask: url(${this.icon()}) no-repeat 50% 50%;
            mask: url(${this.icon()}) no-repeat 50% 50%;
            mask-size: cover;
            background-color: ${this.colorValue()};
            height: ${this.sizePx()}px;
            width: ${this.sizePx()}px`,
  );

  @Output() clicked = new EventEmitter<MouseEvent>();
}
