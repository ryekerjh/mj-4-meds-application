//Core Imports
import { Component, OnInit } from '@angular/core';
import {  Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel,
  NavigationError } from '@angular/router';
//Services
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showLoader: boolean;
  sidebar: boolean = false;
  
  constructor(
    public loaderService: LoaderService,
    public router: Router
  ) {
  };
  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
  });
  };  

  showSidebar() {
    this.sidebar = true;
  };

  hideSidebar() {
    this.sidebar = false;
  };

};
