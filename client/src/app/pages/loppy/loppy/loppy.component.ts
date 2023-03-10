import { Component } from '@angular/core';

@Component({
  selector: 'app-loppy',
  templateUrl: './loppy.component.html',
  styleUrls: ['./loppy.component.scss']
})
export class LoppyComponent {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
