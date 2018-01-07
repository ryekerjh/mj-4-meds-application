//Core Imports
import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {PlatformLocation} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
//Models
import { User } from '../models/user';
//Services
import { AuthService } from '../services/auth.service';
//3rd party imports
import {JwtHelper } from 'angular2-jwt';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  
    constructor(
        private router: Router,
        private platFormLocation: PlatformLocation,
        public authService: AuthService
    ){

    };
    ngOnInit(){

    };
	
};