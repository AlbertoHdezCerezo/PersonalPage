import { Component } from '@angular/core';

import { ConfigBlock } from '../../ahc-base/services/ConfigBlock';
import Language from '../../ahc-base/models/Language';

@Component({
    selector: 'ahc-language',
    styleUrls: [ '../resources/scss/language.scss' ],
    templateUrl: '../resources/html/language.tpl.html'
})
/** [Component] Language knowledge */
export class LanguageComponent{
    public languages: Language[] = [];

    constructor(private configBlock: ConfigBlock) {
        this.languages = this.configBlock.getConfig('languages');
    };
}
