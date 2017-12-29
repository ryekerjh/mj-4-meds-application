//Core Imports
import {Component, Input, OnInit, ViewChild, ElementRef, TemplateRef} from '@angular/core';
import {PlatformLocation} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
//Models

//Services
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
//Component
import { ModalComponent } from '../shared-components/modal/modal.component';
//3rd party imports
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {JwtHelper } from 'angular2-jwt';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
    cart: BsModalRef;

    constructor(
        private router: Router,
        private platFormLocation: PlatformLocation,
        public cartService: CartService,
        private modalService: BsModalService,
        public userService: UserService
    ){

    };
    ngOnInit(){
        this.cart = null;
    };

    summonModal() {
        this.cart = this.modalService.show(ModalComponent);
        //TODO: make call to DB for cart contents;
        this.cart.content.cart = this.cartService.cart;
    }

    dismissModal() {

    }
	
};