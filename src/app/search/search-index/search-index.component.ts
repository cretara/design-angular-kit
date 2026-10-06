import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-search-index',
  templateUrl: './search-index.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SearchIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItSearchComponent');
  }
}
