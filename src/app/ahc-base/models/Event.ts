import EventIteration from './EventIteration';

export default class Event {

    name: string;
    logo: string;
    iterations: EventIteration[];

    constructor(
        name: string = null,
        logo: string = null,
        iterations: EventIteration[] = null
    ){
        this.name = name;
        this.logo = logo;
        this.iterations = iterations;
    }
}
