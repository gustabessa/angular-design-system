import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  input,
} from '@angular/core';
import {
  ButtonComponent,
  IconComponent,
  DropdownMenuComponent,
  IDropdownMenuItem,
} from '@components';

@Component({
  selector: 'ds-header',
  standalone: true,
  imports: [ButtonComponent, IconComponent, DropdownMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor() {
    this.applyThemeFromSystem();
  }

  image = input<string>();

  themeOpen = false;

  @Output() menuOpen = new EventEmitter<void>();

  toggleTheme() {
    this.themeOpen = !this.themeOpen;
  }

  themeItems: IDropdownMenuItem[] = [
    {
      label: 'Claro',
      action: () => {
        this.applyTheme('theme-default');
      },
      icon: 'assets/sun.svg',
    },
    {
      label: 'Escuro',
      action: () => {
        this.applyTheme('theme-dark');
      },
      icon: 'assets/moon.svg',
    },
    {
      label: 'Sistema',
      action: () => {
        this.applyThemeFromSystem();
      },
      icon: 'assets/system.svg',
    },
  ];

  applyTheme(theme: string) {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }

  applyThemeFromSystem() {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.applyTheme('theme-dark');
    } else {
      this.applyTheme('theme-default');
    }
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.themeOpen = false;
  }
}
