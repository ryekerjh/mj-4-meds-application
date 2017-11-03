//Core Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Resolvers
import { ProductsImageResolver } from './products.resolve';
import { ProductsResolver } from './products.resolve';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ProductsImageResolver,
    ProductsResolver
  ]
})
export class ResolversModule { }
