//Core Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Resolvers
import { ProductsImageResolver } from './products-image.resolve';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ProductsImageResolver
  ]
})
export class ResolversModule { }
