import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
//Models 
import { Product } from '../models/product';
//Services 
import { CartService } from '../services/cart.service';
//3rd Party 
import * as _ from "lodash";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  overview: boolean = false;
  products: Product[];
  constructor(
    private activatedRoute: ActivatedRoute,
    public cartService: CartService
  ) { 
  };

  ngOnInit() {
    this.products = this.activatedRoute.snapshot.data['products'];
    _.each(this.products, (product, i) => {
      if(i == 0) {
        this.products = [];            
      }
      if(product.featured) {
        this.products.push(product);
      }
    });
  };

  addToCart(product: Product) {
    this.cartService.addItem(product);
  };

  addToFavorites(product: Product) {

  };

  goToProductDetails(id: any) {

  };

};
