import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from 'ng2-translate';

import { MainComponent } from './components/MainComponent';
import { HiComponent } from './components/HiComponent';
import { ExperienceComponent } from './components/ExperienceComponent';

import {ROUTES} from './routes';

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        MainComponent,
        HiComponent,
        ExperienceComponent
    ],
    imports: [
        TranslateModule,
        RouterModule.forRoot(ROUTES, { useHash: false })
    ]
})
/** [Module] Set of Angular components for APP Layout definition */
export class AhcProfileModule {
    constructor(private translate: TranslateService) {
        translate.setTranslation('es', require('./resources/i18n/en.json'), true);
        translate.setTranslation('en', require('./resources/i18n/en.json'), true);
        translate.setTranslation('de', require('./resources/i18n/de.json'), true);
    }
}
