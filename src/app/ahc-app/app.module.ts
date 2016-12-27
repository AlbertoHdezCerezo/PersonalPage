import {NgModule, APP_INITIALIZER} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/* Third Party modules */
import { NgSemanticModule } from 'ng-semantic';
import { TranslateModule, TranslateService } from 'ng2-translate';

/* Own modules */
import { AhcBaseModule } from '../ahc-base/index';
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
import {ConfigBlock} from "../ahc-base/services/ConfigBlock";

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

        AhcBaseModule,
        AhcLayoutModule,
        AhcProfileModule,

        RouterModule.forRoot(ROUTES, { useHash: false })
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        // Load APP configuration when APP is loaded
        // https://gist.github.com/fernandohu/122e88c3bcd210bbe41c608c36306db9
        { provide: APP_INITIALIZER, useFactory: (config: ConfigBlock) => () => config.load(), deps: [ConfigBlock], multi: true },
    ]
})
export class AppModule {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    }
}

