import ExperienceItem from './ExperienceItem';

export default class ExperiencePlace {
  city: string;
  starts: string;
  ends: string;
  photo: string;
  positions: ExperienceItem[];

  constructor( city: string = null,
               starts: string = null,
               ends: string = null,
               photo: string = null,
               positions: ExperienceItem[] = null
  ){
    this.city = city;
    this.starts = starts;
    this.ends = ends;
    this.photo = photo;
    this.positions = positions;
  }
}
