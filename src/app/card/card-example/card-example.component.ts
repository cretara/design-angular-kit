import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CardExampleComponent {}
