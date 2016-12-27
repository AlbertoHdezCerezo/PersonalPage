import { NgModule } from '@angular/core';

import { ConfigBlock } from './services/ConfigBlock';
import { ExperienceParser } from './services/ExperienceParser';

@NgModule({
    providers: [
        ExperienceParser,
        ConfigBlock
    ],
    declarations: [],
    exports: []
})
/** [Module] Set of Angular components common to all
 *           remaining APP modules */
export class AhcBaseModule {}
