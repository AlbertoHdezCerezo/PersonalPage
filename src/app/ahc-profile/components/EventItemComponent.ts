import { Component } from '@angular/core';

import Event from '../../ahc-base/models/Event';

@Component({
    selector: 'ahc-event-item',
    styleUrls: [ '../resources/scss/event-item.scss' ],
    templateUrl: '../resources/html/event-item.tpl.html',
    inputs: ['eventItem']
})
/** [Component] Each one of the events user took part */
export class EventItemComponent {
    public eventItem: Event;

    constructor() {}
}
