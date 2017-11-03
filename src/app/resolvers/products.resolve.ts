//Core Imports
import {Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
//Services
import { ProductsService } from '../services/products.service';
//Models
import { Product } from '../models/product';
//3rd Party Imports
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductsImageResolver implements Resolve<any>{
  constructor (private productsService: ProductsService){}

  resolve(route: ActivatedRouteSnapshot){
      return this.productsService.getAllProducts()
  };
};

@Injectable()
export class ProductsResolver implements Resolve<Product[]>{
  constructor (private productsService: ProductsService){}
  
    resolve(route: ActivatedRouteSnapshot){
        return this.productsService.getAllProducts()
    };
};
