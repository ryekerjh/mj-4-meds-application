//Core Imports
import { Injectable } from '@angular/core';
//Models
import { Product } from '../models/product';
//3rd party
import * as _ from 'lodash';

@Injectable()
export class CartService {
  private incrementor: number = 0;
  public cart = {};
  public cartCount: number = 0;
  public cartKey: string = `item-${this.incrementor}`
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
    for (let prop in this.cart) {
      if(this.cart[prop] == item) {
        _.remove(this.cart, prop);
        this.cartCount--;
      }
    }
  };
};
