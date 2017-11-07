//Core Imports
import { Component, OnInit } from '@angular/core';
import {  Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel,
  NavigationError } from '@angular/router';
//Services
import { LoaderService } from './services/loader.service';
//3rd Party Imports 
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showLoader: boolean;
  bsModalRef: BsModalRef;  
  
  constructor(
    public loaderService: LoaderService,
    public router: Router,
    private modalService: BsModalService
  ) {
  };
  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
  });
  };  

};
