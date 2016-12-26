import { Routes } from '@angular/router';

import { MainComponent } from './components/MainComponent';
import { LayoutComponent } from '../ahc-layout/components/LayoutComponent';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'cv', pathMatch: 'full' },
    { path: 'cv', component: LayoutComponent,
        children: [
            { path: '', component: MainComponent }
        ]
    }
];
