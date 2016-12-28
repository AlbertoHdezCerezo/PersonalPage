import { Component } from '@angular/core';

import { ConfigBlock } from '../../ahc-base/services/ConfigBlock';
import AcademicRecordPlace from '../../ahc-base/models/AcademicRecordPlace';

@Component({
    selector: 'ahc-academic-record',
    styleUrls: [ '../resources/scss/academic-record.scss' ],
    templateUrl: '../resources/html/academic-record.tpl.html'
})
/** [Component] List of professional experience component */
export class AcademicRecordComponent{

    public academicRecordPlaces: AcademicRecordPlace[] = [];

    constructor(private configBlock: ConfigBlock) {
        this.academicRecordPlaces = this.configBlock.getConfig('academicRecord');
    };
}
