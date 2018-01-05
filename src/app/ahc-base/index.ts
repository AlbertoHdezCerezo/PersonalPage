import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';
import { BrowserModule } from '@angular/platform-browser';

import { ConfigBlock } from './services/ConfigBlock';
import { EventParser } from './services/EventParser';
import { AcademicRecordParser } from './services/AcademicRecordParser';
import { ExperienceParser } from './services/ExperienceParser';
import { LanguageParser } from './services/LanguageParser';
import { MultilanguageFieldPipe } from './pipes/MultilanguageFieldPipe';
import { RecommendationParser } from './services/RecommendationParser';
import PopupDirective from './directives/PopupDirective';
import AnimationDirective from './directives/AnimationDirective';
import PlaceCardComponent from './components/PlaceCardComponent';
import SectionComponent from './components/SectionComponent';
import PlaceCardItemComponent from './components/PlaceCardItemComponent';
import PageDimmerComponent from './components/PageDimmerComponent';
import PageDimmerItemComponent from './components/PageDimmerItemComponent';
import LabelListComponent from './components/LabelListComponent';
import AccordionDirective from './directives/AccordionDirective';

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
    MultilanguageFieldPipe,
    PopupDirective,
    AnimationDirective,
    AccordionDirective,
    SectionComponent,
    PageDimmerComponent,
    PageDimmerItemComponent,
    PlaceCardComponent,
    PlaceCardItemComponent,
    LabelListComponent
  ],
  exports: [
    MultilanguageFieldPipe,
    PopupDirective,
    AnimationDirective,
    AccordionDirective,
    SectionComponent,
    PageDimmerComponent,
    PageDimmerItemComponent,
    PlaceCardComponent,
    PlaceCardItemComponent,
    LabelListComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule
  ]
})
/** [Module] Set of Angular components common to all
 *           remaining APP modules
 */
export class AhcBaseModule {}
