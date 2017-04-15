import { Injectable } from '@angular/core';
import * as _ from 'underscore';

import Recommendation from '../models/Recommendation';

@Injectable()
/** [Service] Gets recommendation information from JSON file and turns that data into objects */
export class RecommendationParser {

    constructor() {}

    public parseRecommendationItem(recommendationItem: any): Recommendation {
        return new Recommendation(
            this.getPerson(recommendationItem),
            this.getPosition(recommendationItem),
            this.getDocument(recommendationItem),
            this.getLogo(recommendationItem),
            this.getContact(recommendationItem)
        );
    }

    public parseRecommendationItems(recommendationsArray: any): Recommendation[] {
        let recommendationItems: Recommendation[] = [];
        _.each(recommendationsArray, (academicRecordItem) => {
            recommendationItems.push(this.parseRecommendationItem(academicRecordItem));
        });
        return recommendationItems;
    }

    private getPerson(recommendation: any): string{
        if (recommendation.person) return recommendation.person;
        return null;
    }

    private getPosition(recommendation: any): string{
        if (recommendation.position) return recommendation.position;
        return null;
    }

    private getDocument(recommendation: any): string{
        if (recommendation.document) return recommendation.document;
        return null;
    }

    private getLogo(recommendation: any): string{
        if (recommendation.logo) return recommendation.logo;
        return null;
    }

    private getContact(recommendation: any): string{
        if (recommendation.contact) return recommendation.contact;
        return null;
    }
}
