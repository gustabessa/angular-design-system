import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ds-button',
  template: `
    <button
      class="group w-full h-full rounded justify-center p-2 flex flex-row items-center"
      [class]="isActive() ? 'is-active' : ''"
      (click)="onClick($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  isActive = input(false);

  @Output() click = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.click.emit(event);
  }
}
