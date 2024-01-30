import { Component, input, signal } from '@angular/core';
import { IShowcaseImage } from './types';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ds-image-showcase',
  standalone: true,
  imports: [],
  template: `@if(this.showcaseImage(); as image) {
    <img class="w-full h-full" [src]="image.src" />
    }`,
})
export class ImageShowcaseComponent {
  constructor() {
    toObservable(this.images)
      .pipe(takeUntilDestroyed())
      .subscribe(async (images) => {
        const loadImagesPromises = images.map(
          (image) =>
            new Promise<void>((resolve) => {
              const imgElement = new Image();
              imgElement.src = image.src;
              imgElement.onload = () => resolve();
            }),
        );
        await Promise.all(loadImagesPromises);
        const imageToStartShowcase = images[0];
        this.setShowcaseImage(imageToStartShowcase);
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
