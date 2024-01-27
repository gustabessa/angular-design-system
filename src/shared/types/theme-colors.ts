import colors from 'tailwindcss/colors';

export const TAILWIND_PREFIX = 'tw';

export type DefaultTailwindColor = keyof typeof colors;

export type ThemePalette =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

type ThemeColorRange = '' | `-${ThemePalette}`;

export type ThemeColors =
  | 'primary'
  | 'secondary'
  | 'contrast'
  | 'contrast-100'
  | 'contrast-200'
  | 'contrast-300'
  | 'contrast-400'
  | `${typeof TAILWIND_PREFIX}-${DefaultTailwindColor}${ThemeColorRange}`;
