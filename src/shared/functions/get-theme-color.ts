import { Signal } from '@ngrx/signals/src/deep-signal';
import {
  DefaultTailwindColor,
  TAILWIND_PREFIX,
  ThemeColors,
  ThemePalette,
} from '../types';
import colors from 'tailwindcss/colors';

export function getThemeColor(color: Signal<ThemeColors>) {
  const [tailwindPrefix, tailwindColor, tailwindColorPalette] =
    color().split('-');
  if (tailwindPrefix === TAILWIND_PREFIX) {
    const color = colors[tailwindColor as DefaultTailwindColor];
    const colorString =
      typeof color === 'object' && tailwindColorPalette
        ? color[tailwindColorPalette as ThemePalette]
        : color;

    return colorString;
  } else {
    return `var(--${color()})`;
  }
}
