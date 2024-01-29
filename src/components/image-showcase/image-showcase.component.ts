import { Component, OnInit, computed, input, signal } from '@angular/core';
import { IShowcaseImage } from './types';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ds-image-showcase',
  standalone: true,
  imports: [],
  template: `<img class="w-full h-full" [src]="this.showcaseImage()?.src" />`,
})
export class ImageShowcaseComponent {
  constructor() {
    toObservable(this.images)
      .pipe(takeUntilDestroyed())
      .subscribe((images) => {
        const imageShowcase = images[this.imageIndex()];
        this.setShowcaseImage(imageShowcase);
      });
  }

  images = input.required<IShowcaseImage[]>();

  imageIndex = signal(0);

  showcaseImage = signal<IShowcaseImage | null>(null);

  setShowcaseImage(image: IShowcaseImage) {
    this.showcaseImage.set(image);
    setTimeout(() => {
      this.imageIndex.update((imageIndex) => {
        if (imageIndex === this.images().length - 1) {
          return 0;
        }
        return imageIndex + 1;
      });
      this.setShowcaseImage(this.images()[this.imageIndex()]);
    }, image.timeMs);
  }
}
