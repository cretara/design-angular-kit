import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-badge-index',
  templateUrl: './badge-index.component.html',
  styleUrls: ['./badge-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BadgeIndexComponent {
  directive: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find(directive => directive.name === 'ItBadgeDirective');
  }
}
