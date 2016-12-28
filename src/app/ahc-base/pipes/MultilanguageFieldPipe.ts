import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Pipe({
    name: 'multilanguageField',
    pure: false
})
/** [Pipe] Format list of genres in a string, allowing internationalization */
export class MultilanguageFieldPipe implements PipeTransform {

    constructor(private translate: TranslateService) {}

    transform(value: any, args: string[]): string {
        if (!value) return null;
        return (this.translate.currentLang in value) ? value[this.translate.currentLang] : null;
    }
}
