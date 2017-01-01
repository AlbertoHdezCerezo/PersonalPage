import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'ahc-layout',
    styleUrls: [ '../resources/scss/layout.scss' ],
    templateUrl: '../resources/html/layout.tpl.html'
})
/** [Component] APP layout, defines how page layout looks like */
export class LayoutComponent {
    constructor(private translate: TranslateService) {};

    public changeLanguage(languageCode: string): void {
        this.translate.use(languageCode);
    }
}
