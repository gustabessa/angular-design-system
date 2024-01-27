import { Component, input, computed } from '@angular/core';
import { ThemeColors } from '@shared/types';
import { getThemeColor } from '@shared/functions';

@Component({
  standalone: true,
  selector: 'ds-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent {
  color = input<ThemeColors>('secondary');

  inlineStyle = computed(
    () =>
      `border-color: ${getThemeColor(
        this.color,
      )}; margin-top: 4px; margin-bottom: 4px`,
  );
}
