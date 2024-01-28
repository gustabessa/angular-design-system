import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ds-button',
  template: `
    <button
      class="w-full h-full rounded items-center justify-center bg-primary hover:bg-contrast-400 focus:bg-primary"
      (click)="clicked.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter<MouseEvent>();
}
