//Core Imports
import { Routes, RouterModule } from '@angular/router';
// Components
import { HomeComponent } from './home.component';
//Resolves
import { ProductsResolver } from '../resolvers/products.resolve';

const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        // canActivate: [AuthGuard],
        resolve: {
            products: ProductsResolver
        }
    }
];

export const homeRouting = RouterModule.forChild(homeRoutes);