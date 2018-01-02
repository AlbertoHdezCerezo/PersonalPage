import { Component, Input } from '@angular/core';

@Component({
  selector: 'ahc-base-place-card-item',
  styleUrls: [ '../resources/scss/place-card-item.scss' ],
  templateUrl: '../resources/html/place-card-item.html',
})
/** [Component] Each one of the locations in which user has experience */
export default class PlaceCardItemComponent {
  @Input() public header: string;
  @Input() public subheader: string;
  @Input() public logo: string;

  constructor() {}
}
