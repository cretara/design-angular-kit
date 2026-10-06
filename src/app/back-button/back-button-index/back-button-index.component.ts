import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-go-back-index',
  templateUrl: './back-button-index.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BackButtonIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItBackButtonComponent');
  }
}
