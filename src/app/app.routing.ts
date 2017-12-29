import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
// import {AuthGuard} from "./services-module/auth/auth-guard.service";

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        // canActivate: [AuthGuard],
        redirectTo: '/home'
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});