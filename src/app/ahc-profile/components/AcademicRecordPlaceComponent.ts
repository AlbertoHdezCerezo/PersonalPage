import { Component } from '@angular/core';

import AcademicRecordPlace from '../../ahc-base/models/AcademicRecordPlace';

@Component({
    selector: 'ahc-academic-record-place',
    styleUrls: [ '../resources/scss/academic-record-place.scss' ],
    templateUrl: '../resources/html/academic-record-place.tpl.html',
    inputs: ['academicRecordPlace']
})
/** [Component] Each one of the locations in which user has academic record */
export class AcademicRecordPlaceComponent {
    public academicRecordPlace: AcademicRecordPlace;

    constructor() {}
}
