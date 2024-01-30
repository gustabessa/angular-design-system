import { Component } from '@angular/core';
import { H1Component, PComponent } from '@components/typography';

@Component({
  standalone: true,
  imports: [H1Component, PComponent],
  template: `
    <main class="lg:px-[8rem] max-lg:px-[2rem]">
      <ds-h1>Ícone</ds-h1>
      <ds-p>Em breve!</ds-p>
    </main>
  `,
})
export class IconPageComponent {}
