import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ds-button',
  template: `
    <button
      class="w-full h-full rounded justify-center p-2 flex flex-row items-center hover:opacity-50"
      (click)="clicked.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter<MouseEvent>();
}
