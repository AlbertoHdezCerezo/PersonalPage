import {Injectable} from '@angular/core';
import * as _ from 'underscore';

import LanguageCertificate from '../models/LanguageCertificate';
import Language from '../models/Language';

@Injectable()
/** [Service] Gets academic record information from JSON file and turns that data into objects */
export class LanguageParser {

    constructor() {}

    private getName(languageCertificate: any): string{
        if(languageCertificate.name) return languageCertificate.name;
        return null;
    }

    private getDate(languageCertificate: any): string{
        if(languageCertificate.date) return languageCertificate.date;
        return null;
    }

    private getCenter(languageCertificate: any): string{
        if(languageCertificate.center) return languageCertificate.center;
        return null;
    }

    private getLogo(languageCertificate: any): string{
        if(languageCertificate.logo) return languageCertificate.logo;
        return null;
    }

    public parseLanguageCertificate(languageCertificate: any): LanguageCertificate {
        return new LanguageCertificate(
            this.getName(languageCertificate),
            this.getDate(languageCertificate),
            this.getCenter(languageCertificate),
            this.getLogo(languageCertificate)
        );
    }

    public parseLanguageCertificates(languageCertificateArray: any): LanguageCertificate[] {
        let languageCertificates: LanguageCertificate[] = [];
        _.each(languageCertificateArray, (languageCertificate) => {
            languageCertificates.push(this.parseLanguageCertificate(languageCertificate));
        });
        return languageCertificates;
    }

    private getLanguage(language: any): string{
        if(language.language) return language.language;
        return null;
    }

    private getLevel(language: any): string{
        if(language.level) return language.level;
        return null;
    }

    private getDescription(language: any): Object{
        if(language.description) return language.description;
        return null;
    }

    private getCertificates(language: any): LanguageCertificate[]{
        if(language.logo) return language.logo;
        return null;
    }

    public parseLanguage(language: any): Language {
        return new Language(
            this.getLanguage(language),
            this.getLevel(language),
            this.getDescription(language),
            this.parseLanguageCertificates(this.getCertificates(language))
        );
    }

    public parseLanguages(languageArray: any): Language[] {
        let languages: Language[] = [];
        _.each(languageArray, (language) => {
            languages.push(this.parseLanguage(language));
        });
        return languages;
    }
}
