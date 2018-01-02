//Core Imports
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//Models
import { User } from '../models/user';
import { Product } from '../models/product';
//Local Vars
import config from '../../../config';

@Injectable()
export class UserService {
  private apiUrl = `${config.config.API_URL}user`;  
  public user:User;
  public loggedIn: Boolean = false;

  constructor(public http: Http) { }
  
  getAllCartItems(userId) {
    return this.http.get(`${this.apiUrl}`)
    .toPromise()
    .then(res => {
      return res.json() as [Product];
    })
  };

  getUserRegistrationDetails(token: string) {
    return this.http.get(`${this.apiUrl}/get-user-details/${token}`)
    .toPromise()
    .then(user => {
      return user.json() as User;
    })
    .catch(e => {
      console.log(e);
    })
  };

  completeRegistration(details: any) {
    return this.http.post(`${this.apiUrl}/complete-registration`, details)
    .toPromise()
    .then(res => {
      console.log(res);
      //TODO: store returned token and log in user
    })

  }

  login(creds: any) {
    return this.http.post(`${this.apiUrl}/login`, creds)
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

  setUser(user:User) {
    return
  };

  };