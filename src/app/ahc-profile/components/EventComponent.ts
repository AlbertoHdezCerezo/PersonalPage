import { Component } from '@angular/core';

import { ConfigBlock } from '../../ahc-base/services/ConfigBlock';
import Event from '../../ahc-base/models/Event';

@Component({
  selector: 'ahc-event',
  styleUrls: [ '../resources/scss/event.scss' ],
  templateUrl: '../resources/html/event.tpl.html'
})
/** [Component] List of professional experience component */
export class EventComponent{
  public config: Object = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

  public events: Event[] = [];

  constructor(private configBlock: ConfigBlock) {
    this.events = this.configBlock.getConfig('events');
  };
}
