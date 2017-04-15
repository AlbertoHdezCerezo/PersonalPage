import { Component } from '@angular/core';

import { ConfigBlock } from '../../ahc-base/services/ConfigBlock';
import Recommendation from '../../ahc-base/models/Recommendation';

@Component({
    selector: 'ahc-recommendation',
    styleUrls: [ '../resources/scss/recommendations.scss' ],
    templateUrl: '../resources/html/recommendation.tpl.html'
})
/** [Component] List of professional experience component */
export class RecommendationComponent{

    public recommendations: Recommendation[] = [];

    constructor(private configBlock: ConfigBlock) {
        this.recommendations = this.configBlock.getConfig('recommendations');
        console.log(this.recommendations);
    };
}
