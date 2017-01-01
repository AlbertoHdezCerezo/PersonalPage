import { Injectable } from '@angular/core';
import * as _ from 'underscore';

import Event from '../models/Event';
import EventIteration from '../models/EventIteration';

@Injectable()
/** [Service] Gets events information from JSON file and turns that data into objects */
export class EventParser {

    constructor() {}

    private getYear(eventIteration: any): string {
        if(eventIteration.year) return eventIteration.year;
        return null;
    }

    private getLogo(eventIteration: any): string {
        if(eventIteration.year) return eventIteration.year;
        return null;
    }

    private getDescription(eventIteration: any): Object {
        if(eventIteration.description) return eventIteration.description;
        return null;
    }

    private getTechnology(eventIteration: any): string[] {
        if(eventIteration.technology) return eventIteration.technology;
        return null;
    }

    private getAward(eventIteration: any): string {
        if(eventIteration.award) return eventIteration.award;
        return null;
    }

    private getProject(eventIteration: any): string {
        if(eventIteration.project) return eventIteration.project;
        return null;
    }

    public parseEventIteration(eventIteration: any): EventIteration {
        return new EventIteration(
            this.getYear(eventIteration),
            this.getLogo(eventIteration),
            this.getDescription(eventIteration),
            this.getTechnology(eventIteration),
            this.getAward(eventIteration)
        );
    }

    public parseEventIterations(eventIterationArray: any): EventIteration[] {
        let eventIterationItems: EventIteration[] = [];
        _.each(eventIterationArray, (eventIteration) => {
            eventIterationItems.push(this.parseEventIteration(eventIteration));
        });
        return eventIterationItems;
    }

    private getName(event: any): string {
        if(event.description) return event.description;
        return null;
    }

    private getIterations(event: any): EventIteration[] {
        if(event.iterations) return this.parseEventIterations(event.iterations);
        return null;
    }

    public parseEvent(event: any): Event {
        return new Event(
            this.getName(event),
            this.getLogo(event),
            this.getIterations(event)
        )
    }

    public parseEvents(eventArray: any): Event[] {
        let eventItems: Event[] = [];
        _.each(eventArray, (event) => {
            eventItems.push(this.parseEvent(event));
        });
        return eventItems;
    }
}
