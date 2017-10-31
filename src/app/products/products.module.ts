//Core Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { ProductsOverviewComponent } from './products-overview/products-overview.component';
//Routing
import { productsRouting } from './products.routing';
@NgModule({
  imports: [
    CommonModule,
    productsRouting
  ],
  declarations: [ProductsOverviewComponent]
})
export class ProductsModule { }
