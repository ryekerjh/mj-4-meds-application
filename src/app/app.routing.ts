import { Routes, RouterModule } from '@angular/router';
// import {AuthGuard} from "./services-module/auth/auth-guard.service";

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        // canActivate: [AuthGuard],
        redirectTo: '/home'
    }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});