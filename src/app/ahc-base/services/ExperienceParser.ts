import { Injectable } from '@angular/core';
import * as _ from 'underscore';

import ExperienceItem from '../models/ExperienceItem';
import ExperiencePlace from '../models/ExperiencePlace';

@Injectable()
/** [Service] Gets experience information from JSON file and turns that data into objects */
export class ExperienceParser {

    constructor() {}

    private getStarts(experiencePlace: any): string{
        if(experiencePlace.starts) return experiencePlace.starts;
        return null;
    }

    private getEnds(experiencePlace: any): string{
        if(experiencePlace.ends) return experiencePlace.ends;
        return null;
    }

    private getName(experiencePlace: any): string{
        if(experiencePlace.name) return experiencePlace.name;
        return null;
    }

    private getDescription(experiencePlace: any): Object{
        if(experiencePlace.description) return experiencePlace.description;
        return null;
    }

    private getTechnologies(experiencePlace: any): string[]{
        if(experiencePlace.technologies) return experiencePlace.technologies;
        return null;
    }

    private getCompany(experiencePlace: any): string{
        if(experiencePlace.company) return experiencePlace.company;
        return null;
    }

    private getLogo(experiencePlace: any): string{
        if(experiencePlace.logo) return experiencePlace.logo;
        return null;
    }

    private getVideo(experiencePlace: any): string{
        if(experiencePlace.starts) return experiencePlace.video;
        return null;
    }

    public parseExperienceItem(experienceItem: any): ExperienceItem {
        return new ExperienceItem(
            this.getStarts(experienceItem),
            this.getEnds(experienceItem),
            this.getName(experienceItem),
            this.getDescription(experienceItem),
            this.getTechnologies(experienceItem),
            this.getCompany(experienceItem),
            this.getVideo(experienceItem)
        );
    }

    public parseExperienceItems(experienceItemArray: any): ExperienceItem[] {
        let experienceItems: ExperienceItem[] = [];
        _.each(experienceItemArray, (experienceItem) => {
            experienceItems.push(this.parseExperienceItem(experienceItem));
        });
        return experienceItems;
    }

    private getCity(experiencePlace: any): string{
        if(experiencePlace.city) return experiencePlace.city;
        return null;
    }

    private getPhoto(experiencePlace: any): string{
        if(experiencePlace.photo) return experiencePlace.photo;
        return null;
    }

    private getPositions(experiencePlace: any): string{
        if(experiencePlace.positions) return experiencePlace.positions;
        return null;
    }

    public parseExperiencePlace(experiencePlace: any): ExperiencePlace {
        return new ExperiencePlace(
            this.getCity(experiencePlace),
            this.getStarts(experiencePlace),
            this.getEnds(experiencePlace),
            this.getPhoto(experiencePlace),
            this.parseExperienceItems(this.getPositions(experiencePlace))
        )
    }

    public parseExperiencePlaces(experiencePlaceArray: any): ExperiencePlace[] {
        let experiencePlaces: ExperiencePlace[] = [];
        _.each(experiencePlaceArray, (experiencePlace) => {
            experiencePlaces.push(this.parseExperiencePlace(experiencePlace));
        });
        return experiencePlaces;
    }
}
