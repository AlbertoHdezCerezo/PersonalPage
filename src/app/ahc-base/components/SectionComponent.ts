import { Component, Input } from '@angular/core';

@Component({
  selector: 'ahc-base-section',
  styleUrls: [ '../resources/scss/section.scss' ],
  templateUrl: '../resources/html/section.html'
})
/** [Component] Section component for common layout on each page sections */
export default class SectionComponent {
  @Input() public header: string = 'Header';
  @Input() public icon: string = 'industry';

  constructor() {};
}
