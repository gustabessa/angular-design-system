import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

const initialState = {
  menuOpen: false,
};

export const LayoutStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    toggleMenu(): void {
      patchState(store, { menuOpen: !store.menuOpen() });
    },
  })),
);
