import { Component } from '@angular/core';

import { ConfigBlock } from '../../ahc-base/services/ConfigBlock';
import ExperiencePlace from '../../ahc-base/models/ExperiencePlace';

@Component({
    selector: 'ahc-experience',
    styleUrls: [ '../resources/scss/experience.scss' ],
    templateUrl: '../resources/html/experience.tpl.html'
})
/** [Component] List of professional experience component */
export class ExperienceComponent{

    public experiencePlaces: ExperiencePlace[] = [];

    constructor(private configBlock: ConfigBlock) {
        this.experiencePlaces = this.configBlock.getConfig('experience');
    };
}
