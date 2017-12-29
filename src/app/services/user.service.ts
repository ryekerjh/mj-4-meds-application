//Core
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//Locals
import config from '../../../config';
//Models
import { Product } from '../models/product';
import { User } from '../models/user';


@Injectable()
export class UserService {
  private apiUrl = `${config.config.API_URL}cart`;  
  public user:User;
  public loggedIn: Boolean = false;

  constructor(public http: Http) { }
  
  getAllCartItems(userId) {
    return this.http.get(`${this.apiUrl}`)
    .toPromise()
    .then(res => {
      return res.json() as [Product];
    })
  }

  login(creds: any) {
    return this.http.post(`${this.apiUrl}login`, creds)
    .toPromise()
    .then(res => {
      return res.json();
    })
    //TODO: write backend for user login, write storage peice for after login, mount user in userservice.user
    
    .catch(e => {
      console.log(e);
    });
  }
  
  logout() {
    return null;
  };

}
