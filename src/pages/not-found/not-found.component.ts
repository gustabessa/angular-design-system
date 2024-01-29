import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { H1Component, PComponent } from '@components/typography';
import { ImageShowcaseComponent, IShowcaseImage } from '@components';

@Component({
  selector: 'ds-not-found',
  standalone: true,
  imports: [H1Component, PComponent, ImageShowcaseComponent, RouterModule],
  template: `
    <main class="flex flex-col lg:px-[8rem] max-lg:px-[2rem] text-center">
      <ds-h1>Ops! Página não encontrada</ds-h1>
      <ds-p
        >Parece que você se perdeu.
        <a [routerLink]="'/'" class="font-semibold underline decoration-solid">
          Quer uma mãozinha?
        </a>
      </ds-p>
      <ds-image-showcase
        class="self-center max-lg:w-[80dvw] lg:w-[400px] aspect-square"
        [images]="this.showcaseImages"
      ></ds-image-showcase>
    </main>
  `,
})
export class NotFoundComponent {
  showcaseImages: IShowcaseImage[] = [
    {
      src: 'assets/blinking-cat.gif',
      timeMs: 2000,
    },
    {
      src: 'assets/mind-blown-cat.gif',
      timeMs: 6000,
    },
    {
      src: 'assets/suspicious-cat.gif',
      timeMs: 6000,
    },
  ];
}
