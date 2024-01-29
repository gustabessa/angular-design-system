import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

const initialState = {
  isMenuOpen: false,
};

export const LayoutStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    toggleMenu(): void {
      const html = document.querySelector('html') as HTMLHtmlElement;
      if (store.isMenuOpen()) {
        html.style.overflow = '';
        patchState(store, { isMenuOpen: false });
      } else {
        html.style.overflow = 'hidden';
        patchState(store, { isMenuOpen: true });
      }
    },
  })),
);
