import { Routes } from '@angular/router';

import { MainComponent } from './components/MainComponent';
import { LayoutComponent } from '../ahc-layout/components/LayoutComponent';

export const ROUTES: Routes = [
    { path: '', component: LayoutComponent,
        children: [
            { path: '', component: MainComponent }
        ]
    }
];
