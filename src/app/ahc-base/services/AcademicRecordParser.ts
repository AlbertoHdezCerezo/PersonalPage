import { Injectable } from '@angular/core';
import * as _ from 'underscore';

import AcademicRecordItem from '../models/AcademicRecordItem';
import AcademicRecordPlace from '../models/AcademicRecordPlace';

@Injectable()
/** [Service] Gets academic record information from JSON file and turns that data into objects */
export class AcademicRecordParser {

    constructor() {}

    public parseAcademicRecordItem(experienceItem: any): AcademicRecordItem {
        return new AcademicRecordItem(
            this.getStarts(experienceItem),
            this.getEnds(experienceItem),
            this.getScore(experienceItem),
            this.getAward(experienceItem),
            this.getName(experienceItem),
            this.getDescription(experienceItem),
            this.getCenter(experienceItem),
            this.getLogo(experienceItem),
            this.getActivities(experienceItem),
            this.getAchievements(experienceItem)
        );
    }

    public parseAcademicRecordItems(academicRecordItemArray: any): AcademicRecordItem[] {
        let academicRecordItems: AcademicRecordItem[] = [];
        _.each(academicRecordItemArray, (academicRecordItem) => {
            academicRecordItems.push(this.parseAcademicRecordItem(academicRecordItem));
        });
        return academicRecordItems;
    }

    public parseAcademicRecordPlace(academicRecordPlace: any): AcademicRecordPlace {
        return new AcademicRecordPlace(
            this.getCity(academicRecordPlace),
            this.getStarts(academicRecordPlace),
            this.getEnds(academicRecordPlace),
            this.getPhoto(academicRecordPlace),
            this.parseAcademicRecordItems(this.getTitles(academicRecordPlace))
        );
    }

    public parseAcademicRecordPlaces(academicRecordPlaceArray: any): AcademicRecordPlace[] {
        let experiencePlaces: AcademicRecordPlace[] = [];
        _.each(academicRecordPlaceArray, (academicRecordPlace) => {
            experiencePlaces.push(this.parseAcademicRecordPlace(academicRecordPlace));
        });
        return experiencePlaces;
    }

    private getStarts(experiencePlace: any): string{
        if (experiencePlace.starts) return experiencePlace.starts;
        return null;
    }

    private getEnds(experiencePlace: any): string{
        if (experiencePlace.ends) return experiencePlace.ends;
        return null;
    }

    private getScore(experiencePlace: any): string{
        if (experiencePlace.score) return experiencePlace.score;
        return null;
    }

    private getAward(experiencePlace: any): boolean{
        if (experiencePlace.award) return experiencePlace.award;
        return null;
    }

    private getName(experiencePlace: any): Object{
        if (experiencePlace.name) return experiencePlace.name;
        return null;
    }

    private getDescription(experiencePlace: any): Object{
        if (experiencePlace.description) return experiencePlace.description;
        return null;
    }

    private getCenter(experiencePlace: any): string{
        if (experiencePlace.center) return experiencePlace.center;
        return null;
    }

    private getLogo(experiencePlace: any): string{
        if (experiencePlace.logo) return experiencePlace.logo;
        return null;
    }

    private getActivities(experiencePlace: any): Object[]{
        if (experiencePlace.activities) return experiencePlace.activities;
        return null;
    }

    private getAchievements(experiencePlace: any): Object[]{
        if (experiencePlace.achievements) return experiencePlace.achievements;
        return null;
    }

    private getCity(experiencePlace: any): string{
        if (experiencePlace.city) return experiencePlace.city;
        return null;
    }

    private getPhoto(experiencePlace: any): string{
        if (experiencePlace.photo) return experiencePlace.photo;
        return null;
    }

    private getTitles(experiencePlace: any): Object[]{
        if (experiencePlace.titles) return experiencePlace.titles;
        return null;
    }
}
