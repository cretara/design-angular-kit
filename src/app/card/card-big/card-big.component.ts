import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CardBigComponent {}
