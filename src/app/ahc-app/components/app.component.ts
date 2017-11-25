import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    styleUrls: ['../resources/scss/app.component.scss', '../resources/scss/fonts.scss'],
    templateUrl: '../resources/html/app.tpl.html',

    // Applies style to all page
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor() {}
}
