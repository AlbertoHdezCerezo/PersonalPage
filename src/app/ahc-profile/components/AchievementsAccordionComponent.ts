import { Component, Input } from '@angular/core';

import AcademicRecordItem from '../../ahc-base/models/AcademicRecordItem';

@Component({
  selector: 'ahc-achievements-accordion',
  styleUrls: [ '../resources/scss/achievements-accordion.scss' ],
  templateUrl: '../resources/html/achievements-accordion.html',
  inputs: ['achievementsAccordion']
})
/** [Component] Each one of the locations in which user has academic record */
export class AchievementsAccordionComponent {
  @Input() public academicRecordItem: AcademicRecordItem;

  constructor() {}
}
