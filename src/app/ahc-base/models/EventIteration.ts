export default class EventIteration {

    year: string;
    logo: string;
    description: Object;
    technology: string[];
    award: string;
    project: string;

    constructor(
        year: string = null,
        logo: string = null,
        description: Object = null,
        technology: string[] = null,
        award: string = null,
        project: string = null
    ){
        this.year = year;
        this.logo = logo;
        this.description = description;
        this.technology = technology;
        this.award = award;
        this.project = project;
    }

}
