import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { IMenuItem } from '@components';
import { RouterSignalStore } from '../router/router.signal-store';

const initialState: { isMenuOpen: boolean; menuOriginalState: IMenuItem[] } = {
  isMenuOpen: false,
  menuOriginalState: [
    {
      icon: 'assets/home.svg',
      route: '/',
      label: 'Home',
    },
    {
      icon: 'assets/square-code.svg',
      label: 'Componentes',
      children: [
        {
          icon: 'assets/file-smile.svg',
          label: 'Ícone',
          route: '/components/icon',
        },
      ],
    },
    {
      icon: 'assets/source-code.svg',
      route: 'https://github.com/gustabessa/angular-design-system',
      label: 'Ver código fonte',
    },
  ],
};

function recursivelyFindRoute(
  menuItems: IMenuItem[],
  currentUrl: string,
): IMenuItem | null {
  for (const menuItem of menuItems) {
    if (menuItem.route === currentUrl) {
      return menuItem;
    }

    if (menuItem.children) {
      const foundRoute = recursivelyFindRoute(menuItem.children, currentUrl);
      if (foundRoute) {
        menuItem.isExpanded = true;
        return foundRoute;
      }
    }
  }
  return null;
}

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
  withComputed((store, routerSignalStore = inject(RouterSignalStore)) => ({
    menuItems: computed((): IMenuItem[] => {
      const menuItemsCopy = JSON.parse(
        JSON.stringify(store.menuOriginalState()),
      );
      const currentUrl = routerSignalStore.currentUrl();
      if (currentUrl === '') return menuItemsCopy;

      recursivelyFindRoute(menuItemsCopy, currentUrl);
      return menuItemsCopy;
    }),
  })),
);
