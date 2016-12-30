export default class LanguageCertificate {
    name: string;
    date: string;
    center: string;
    logo: string;

    constructor(
        name: string = null,
        date: string = null,
        center: string = null,
        logo: string = null
    ){
        this.name = name;
        this.date = date;
        this.center = center;
        this.logo = logo;
    }
}
