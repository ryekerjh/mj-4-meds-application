//Core Imports
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//Models
import { User } from '../models/user';
import { Product } from '../models/product';
//Local Vars
import config from '../../../config';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class UserService {
  private apiUrl = `${config.config.API_URL}user`;  
  public user:User;
  public loggedIn: Boolean = false;

  constructor(public http: Http, public authHttp: AuthHttp) { }
  
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

  beginRegistration(user:any) {
    return this.http.post(`${this.apiUrl}`, user)
    .toPromise()
    .then(data => {
      return data.json();
    })
    .catch(e => {
      console.log(e);
    });
  }

  completeRegistration(details: any) {
    return this.authHttp.post(`${this.apiUrl}/complete-registration`, details)
    .toPromise()
    .then(res => {
      return res.json();
      //TODO: store returned token and log in user
    })

  }

  setUser(user:User) {
    return
  };

  };