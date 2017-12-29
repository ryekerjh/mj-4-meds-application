//Core Imports
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//Models
import { Product } from '../models/product';
//3rd party
import * as _ from 'lodash';
//Local
import config from '../../../config';

@Injectable()
export class CartService {
  private incrementor: number = 0;
  public cart = [];
  public cartCount: number = 0;
  public cartKey: string = `item-${this.incrementor}`;
  public http: Http;
  private apiUrl = `${config.config.API_URL}cart`;  

    constructor() { }
    //TODO: add localstorage component so that cart items get stored in localstorage/sessionstorage or DB

  addItem(item: Product) {
    if(!_.includes(this.cart, item)) {
      this.cart[this.incrementor] = item;
      this.incrementor++;
      this.cartCount++;
    }
  };

  removeItem(item: Product) {
    _.each(this.cart, (c) => {
      if(c == item) {
        _.remove(this.cart, c);
        this.cartCount--;
      }
    })
  };
};
