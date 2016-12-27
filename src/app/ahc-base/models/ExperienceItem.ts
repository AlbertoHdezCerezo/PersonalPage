export default class ExperienceItem {
    starts: string;
    ends: string;
    name: Object;
    description: Object;
    technologies: string[];
    company: string;
    logo: string;
    video: string;

    constructor( starts: string = null,
        ends: string = null,
        name: Object = null,
        description: Object = null,
        technologies: string[] = null,
        company: string = null,
        logo: string = null,
        video: string = null
    ){
        this.starts = starts;
        this.ends = ends;
        this.name = name;
        this.logo = logo;
        this.description = description;
        this.technologies = technologies;
        this.company = company;
        this.video = video;
    };
}
