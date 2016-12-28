import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from 'ng2-translate';
import { BrowserModule } from '@angular/platform-browser';

import { AhcBaseModule } from '../ahc-base/index';

import { MainComponent } from './components/MainComponent';
import { HiComponent } from './components/HiComponent';
import { ExperienceComponent } from './components/ExperienceComponent';
import { ExperienceItemComponent } from './components/ExperienceItemComponent';
import { ExperiencePlaceComponent } from './components/ExperiencePlaceComponent';
import { AcademicRecordComponent } from './components/AcademicRecordComponent';
import { AcademicRecordPlaceComponent } from './components/AcademicRecordPlaceComponent';

import { ROUTES } from './routes';

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        MainComponent,
        HiComponent,
        ExperienceComponent,
        ExperiencePlaceComponent,
        ExperienceItemComponent,
        AcademicRecordComponent,
        AcademicRecordPlaceComponent
    ],
    imports: [
        BrowserModule,
        TranslateModule,

        AhcBaseModule,

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
