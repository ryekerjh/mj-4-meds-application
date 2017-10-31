//Core Imports
import { Routes, RouterModule } from '@angular/router';
// Components
import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
    {
        path: 'contact',
        component: ContactComponent,
        // canActivate: [AuthGuard],
    }
];

export const contactRouting = RouterModule.forChild(contactRoutes);