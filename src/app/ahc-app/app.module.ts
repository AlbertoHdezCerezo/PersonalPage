import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/* Third Party modules */
import { NgSemanticModule } from 'ng-semantic';
import { TranslateModule, TranslateService } from 'ng2-translate';

/* Own modules */
import { AhcLayoutModule } from '../ahc-layout/index';
import { AhcProfileModule } from '../ahc-profile/index';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

// App is our top level component
import { AppComponent } from './components/app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        HttpModule,

        NgSemanticModule,
        TranslateModule.forRoot(),

        AhcLayoutModule,
        AhcProfileModule,

        RouterModule.forRoot(ROUTES, { useHash: false })
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS
    ]
})
export class AppModule {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    }
}

