import { Component } from '@angular/core';

import ExperiencePlace from '../../ahc-base/models/ExperiencePlace';

@Component({
    selector: 'ahc-experience-place',
    styleUrls: [ '../resources/scss/experience-place.scss' ],
    templateUrl: '../resources/html/experience-place.tpl.html',
    inputs: ['experiencePlace']
})
/** [Component] Each one of the locations in which user has experience */
export class ExperiencePlaceComponent {
    public experiencePlace: ExperiencePlace;

    constructor() {}
}
