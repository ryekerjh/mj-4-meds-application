//Core Imports
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//Local Imports
import config from '../../../config';
//Models 
import { Product } from '../models/product';
//3rd Party Imports
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService {
  private apiUrl = `${config.config.API_URL}product`;  
  constructor(public http: Http) { };

  getAllProducts() {
    return this.http.get(`${this.apiUrl}`)
    .toPromise()
    .then(res => {
      return res.json() as [Product];
    })
  };
};
