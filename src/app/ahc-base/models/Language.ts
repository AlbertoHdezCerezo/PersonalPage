import LanguageCertificate from './LanguageCertificate';

export default class Language {
    language: string;
    level: string;
    description: Object;
    certificates: LanguageCertificate[];

    constructor(
        language: string = null,
        level: string = null,
        description: Object = null,
        certificates: LanguageCertificate[] = null,
    ){
        this.language = language;
        this.level = level;
        this.description = description;
        this.certificates = certificates;
    }
}
