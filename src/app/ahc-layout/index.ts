import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from 'ng2-translate';
import { NgSemanticModule } from 'ng-semantic';

import { LayoutComponent } from './components/LayoutComponent';

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        LayoutComponent
    ],
    imports: [
        TranslateModule,
        NgSemanticModule,
        RouterModule.forRoot([], { useHash: false })
    ]
})
/** [Module] Set of Angular components for APP Layout definition */
export class AhcLayoutModule {
    constructor(private translate: TranslateService) {
        translate.setTranslation('es', require('./resources/i18n/es.json'), true);
        translate.setTranslation('en', require('./resources/i18n/en.json'), true);
        translate.setTranslation('de', require('./resources/i18n/de.json'), true);
    }
}
