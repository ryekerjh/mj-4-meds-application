//Core Imports
import { Routes, RouterModule } from '@angular/router';
// Components
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        // canActivate: [AuthGuard],
    }
];

export const homeRouting = RouterModule.forChild(homeRoutes);