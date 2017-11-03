//Core Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Services
import { LoaderService } from './loader.service';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LoaderService,
    ProductsService,
    CartService
  ]
})
export class ServicesModule { }
