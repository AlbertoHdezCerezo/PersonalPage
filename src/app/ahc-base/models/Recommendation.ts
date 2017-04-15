export default class Recommendation {
    person: string;
    position: string;
    document: string;
    logo: string;
    contact: string;

    constructor(
        person: string = null,
        position: string = null,
        document: string = null,
        logo: string = null,
        contact: string = null
    ){
        this.person = person;
        this.position = position;
        this.document = document;
        this.logo = logo;
        this.contact = contact;
    };
}
