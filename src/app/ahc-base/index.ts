import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';

import { ConfigBlock } from './services/ConfigBlock';
import { AcademicRecordParser } from './services/AcademicRecordParser';
import { ExperienceParser } from './services/ExperienceParser';
import { MultilanguageFieldPipe } from './pipes/MultilanguageFieldPipe';

@NgModule({
    providers: [
        ExperienceParser,
        AcademicRecordParser,
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
