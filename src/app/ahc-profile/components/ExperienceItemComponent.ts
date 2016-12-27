import { Component } from '@angular/core';

import ExperienceItem from '../../ahc-base/models/ExperienceItem';

@Component({
    selector: 'ahc-experience-item',
    styleUrls: [ '../resources/scss/experience-item.scss' ],
    templateUrl: '../resources/html/experience-item.tpl.html',
    inputs: ['experienceItem']
})
/** [Component] Each one of the locations in which user has experience */
export class ExperienceItemComponent {
    public experienceItem: ExperienceItem;

    constructor() {}
}
