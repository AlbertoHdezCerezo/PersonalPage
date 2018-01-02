import { Component, ElementRef, Input, ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'ahc-base-page-dimmer',
  styleUrls: [ '../resources/scss/page-dimmer.scss' ],
  templateUrl: '../resources/html/page-dimmer.html'
})
/** [Component] Page Dimmer Component to cover all page with detailed information */
export default class PageDimmerComponent {
  @ViewChild('dimmer') public dimmer: ElementRef;
  @Input() public header: string = 'Header';
  @Input() public backgroundImage: string = null;

  constructor() {};

  public toggle() {
    $(this.dimmer.nativeElement).dimmer('toggle');
  }
}
