export default class AcademicRecordItem {
    starts: string;
    ends: string;
    score: string;
    award: boolean;
    name: Object;
    description: Object;
    center: string;
    logo: string;
    activities: Object[];
    achievements: Object[];

    constructor(
        starts: string = null,
        ends: string = null,
        score: string = null,
        award: boolean = null,
        name: Object = null,
        description: Object = null,
        center: string = null,
        logo: string = null,
        activities: Object[] = null,
        achievements: Object[] = null
    ){
        this.starts = starts;
        this.ends = ends;
        this.score = score;
        this.award = award;
        this.name = name;
        this.description = description;
        this.center = center;
        this.logo = logo;
        this.activities = activities;
        this.achievements = achievements;
    };
}
