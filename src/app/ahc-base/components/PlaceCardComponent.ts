import { Component, Input } from '@angular/core';

@Component({
  selector: 'ahc-base-place-card',
  styleUrls: [ '../resources/scss/place-card.scss' ],
  templateUrl: '../resources/html/place-card.html'
})
/** [Component] Card Component for experience and academic record */
export default class PlaceCardComponent {
  @Input() public header: string = 'Header';
  @Input() public subheader: string = 'subHeader';
  @Input() public backgroundImageUrl: string = '/assets/img/poznan.jpg';

  constructor() {};
}
