import { Component, Input } from '@angular/core';

@Component({
  selector: 'ahc-base-label-list',
  styleUrls: [ '../resources/scss/label-list.scss' ],
  templateUrl: '../resources/html/label-list.html'
})
/** [Component] Section component for common layout on each page sections */
export default class LabelListComponent {
  @Input() public labels: string[] = [];

  constructor() {};
}
