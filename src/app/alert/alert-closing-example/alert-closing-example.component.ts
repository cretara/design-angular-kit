import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-alert-closing-example',
  templateUrl: './alert-closing-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AlertClosingExampleComponent {
  closeTime?: string;
  closedTime?: string;

  onClose(): void {
    this.closeTime = new Date().toISOString();
  }

  onClosed(): void {
    this.closedTime = new Date().toISOString();
  }
}
