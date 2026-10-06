import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-toggle-index',
  templateUrl: './toggle-index.component.html',
  styleUrls: ['./toggle-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ToggleIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItCheckboxComponent');
  }
}
