import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from 'ng2-translate';
import { BrowserModule } from '@angular/platform-browser';
import { NgSemanticModule } from 'ng-semantic';

import { AhcBaseModule } from '../ahc-base/index';

import { MainComponent } from './components/MainComponent';
import { HiComponent } from './components/HiComponent';
import { PresentationComponent } from './components/PresentationComponent';
import { ExperienceComponent } from './components/ExperienceComponent';
import { ExperienceItemComponent } from './components/ExperienceItemComponent';
import { ExperiencePlaceComponent } from './components/ExperiencePlaceComponent';
import { AcademicRecordComponent } from './components/AcademicRecordComponent';
import { AcademicRecordPlaceComponent } from './components/AcademicRecordPlaceComponent';
import { LanguageComponent } from './components/LanguageComponent';
import { EventComponent } from './components/EventComponent';
import { EventItemComponent } from './components/EventItemComponent';
import { ContactComponent } from './components/ContactComponent';

import { ROUTES } from './routes';

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        MainComponent,
        HiComponent,
        PresentationComponent,
        ExperienceComponent,
        ExperiencePlaceComponent,
        ExperienceItemComponent,
        AcademicRecordComponent,
        AcademicRecordPlaceComponent,
        EventComponent,
        EventItemComponent,
        LanguageComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        TranslateModule,
        NgSemanticModule,

        AhcBaseModule,

        RouterModule.forRoot(ROUTES, { useHash: false })
    ]
})
/** [Module] Set of Angular components for APP Layout definition */
export class AhcProfileModule {
    constructor(private translate: TranslateService) {
        translate.setTranslation('es', require('./resources/i18n/es.json'), true);
        translate.setTranslation('en', require('./resources/i18n/en.json'), true);
        translate.setTranslation('de', require('./resources/i18n/de.json'), true);
    }
}
