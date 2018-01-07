import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { RegisterComponent } from 'app/register/register.component';
import { CompleteRegistrationComponent } from './register/complete-registration/complete-registration.component';
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
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'token-login/:token',
        component: CompleteRegistrationComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});