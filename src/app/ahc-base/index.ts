import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';

import { ConfigBlock } from './services/ConfigBlock';
import { EventParser } from './services/EventParser';
import { AcademicRecordParser } from './services/AcademicRecordParser';
import { ExperienceParser } from './services/ExperienceParser';
import { LanguageParser } from './services/LanguageParser';
import { MultilanguageFieldPipe } from './pipes/MultilanguageFieldPipe';
import { RecommendationParser } from './services/RecommendationParser';

@NgModule({
    providers: [
        EventParser,
        ExperienceParser,
        AcademicRecordParser,
        LanguageParser,
        RecommendationParser,
        ConfigBlock
    ],
    declarations: [
        MultilanguageFieldPipe
    ],
    exports: [
        MultilanguageFieldPipe
    ],
    imports: [
        TranslateModule
    ]
})
/** [Module] Set of Angular components common to all
 *           remaining APP modules */
export class AhcBaseModule {}
