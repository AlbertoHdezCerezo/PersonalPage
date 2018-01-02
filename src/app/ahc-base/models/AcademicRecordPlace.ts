import AcademicRecordItem from './AcademicRecordItem';

export default class AcademicRecordPlace {
    city: string;
    starts: string;
    ends: string;
    photo: string;
    titles: AcademicRecordItem[];

    constructor( city: string = null,
                 starts: string = null,
                 ends: string = null,
                 photo: string = null,
                 titles: AcademicRecordItem[] = null
    ){
        this.city = city;
        this.starts = starts;
        this.ends = ends;
        this.photo = photo;
        this.titles = titles;
    }
}
