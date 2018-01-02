import { Component, Input } from '@angular/core';

@Component({
  selector: 'ahc-base-page-dimmer-item',
  styleUrls: [ '../resources/scss/page-dimmer-item.scss' ],
  templateUrl: '../resources/html/page-dimmer-item.html',
})
/** [Component] Each one of the locations in which user has experience */
export default class PageDimmerItemComponent {
  @Input() public header: string;
  @Input() public subheader: string;
  @Input() public content: string;
  @Input() public logo: string;

  constructor() {}
}
