//Core Imports
import { Routes, RouterModule } from '@angular/router';
// Components
import { ProductsOverviewComponent } from './products-overview/products-overview.component';

const productsRoutes: Routes = [
    {
        path: 'products',
        component: ProductsOverviewComponent,
        // canActivate: [AuthGuard],
    },
    // {
    //     path: 'product/:id',
    //     component: 
    // }
];

export const productsRouting = RouterModule.forChild(productsRoutes);