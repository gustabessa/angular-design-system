import { inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { patchState, signalStore, withHooks, withState } from '@ngrx/signals';

const initialState = {
  currentUrl: '',
};

export const RouterSignalStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withHooks({
    onInit: (store, router = inject(Router)) => {
      router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
        if (event instanceof NavigationEnd) {
          patchState(store, { currentUrl: router.url });
        }
      });
    },
  }),
);
