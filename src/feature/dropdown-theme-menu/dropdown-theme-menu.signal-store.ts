import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { IDropdownMenuItem } from '@components';

type ThemeValue = 'theme-default' | 'theme-dark' | 'theme-system';

type Theme = {
  label: string;
  value: ThemeValue;
  icon: string;
};

const themes: Map<ThemeValue, Theme> = new Map([
  [
    'theme-default',
    {
      label: 'Claro',
      value: 'theme-default',
      icon: 'assets/sun.svg',
    },
  ],
  [
    'theme-dark',
    {
      label: 'Escuro',
      value: 'theme-dark',
      icon: 'assets/moon.svg',
    },
  ],
  [
    'theme-system',
    {
      label: 'Sistema',
      value: 'theme-system',
      icon: 'assets/system.svg',
    },
  ],
]);

const THEME_VALUE_KEY = '@ds/themes/theme-value';

const getThemeFromSystem = (): ThemeValue => {
  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'theme-dark'
    : 'theme-default';
};

const initialState = {
  isThemeOpen: false,
  selectedTheme: themes.get('theme-system') as Theme,
  themes,
};

export const DropdownThemeMenuStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    themeMenuItems: computed(() =>
      Array.from(store.themes().values()).map(
        (theme): IDropdownMenuItem<Theme> => ({
          label: theme.label,
          icon: theme.icon,
          data: theme,
        }),
      ),
    ),
    selectedThemeMenuItem: computed(
      (): IDropdownMenuItem<Theme> => ({
        label: store.selectedTheme().label,
        icon: store.selectedTheme().icon,
        data: store.selectedTheme(),
      }),
    ),
  })),
  withMethods((store) => ({
    toggleThemeMenu: (value?: boolean) => {
      patchState(store, { isThemeOpen: value ?? !store.isThemeOpen() });
    },
    applyTheme: (theme: Theme) => {
      const themeValue =
        theme.value === 'theme-system' ? getThemeFromSystem() : theme.value;

      localStorage.setItem(THEME_VALUE_KEY, themeValue);
      document.querySelector('html')?.setAttribute('data-theme', themeValue);
      patchState(store, { selectedTheme: theme });
    },
  })),
  withHooks({
    onInit: (store) => {
      const storageThemeValue = localStorage.getItem(
        THEME_VALUE_KEY,
      ) as ThemeValue;
      const theme = store
        .themes()
        .get(storageThemeValue ?? 'theme-system') as Theme;
      store.applyTheme(theme);
    },
  }),
);
