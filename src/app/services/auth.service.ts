//Core Imports
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
//Services
import { UserService} from './user.service';
//3rd Party Imports
import {toPromise} from "rxjs/operator/toPromise";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {AuthHttp, JwtHelper} from 'angular2-jwt';


@Injectable()
export class AuthService {
    loggedIn: boolean = false;
    loginError: boolean = false;
    constructor(private router: Router,
                public userService: UserService,
                public authHttp: AuthHttp) {}


    // login method sends user creds to api. If token returned then token and user saved to localStorage
    login(creds): Observable<any> {
        return this.authHttp.post('users/login', creds)
          .do((res) => {
            if(res['token']) {
                this.loggedIn = true;
                this.storeToken(res['token']);
                this.userService.setUser();
                return this.loginError = false;
            } else {
                return {err: true, toastMessage: res['message']}
            }
          });
    };

    // This method will log the user out
    public logout() {
        this.loggedIn = false;
        // To log out, just remove the token
        // from local storage
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
    };

    // this method will check to see if the user is logged in.
    // able to tell by checking to see if they have a token and whether that token is valid or not.
    isLoggedIn() {
        this.loggedIn = localStorage.getItem('token') !== null;
        return this.loggedIn;
    }

    private storeToken(token: string) {
        localStorage.setItem('token', token);
    }

    refreshToken(token: string) {
        localStorage.removeItem('token');
        this.storeToken(token);        
    }
}