//Core Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
//3rd Party Imports
import {provideAuth, AuthHttp, JwtHelper} from 'angular2-jwt';
//Modules
import { routing } from './app.routing';
import { ProductsModule } from './products/products.module';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { ResolversModule } from './resolvers/resolvers.module';
import { ServicesModule } from './services/services.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    routing,
    ProductsModule,
    ContactModule,
    HomeModule,
    ResolversModule,
    ServicesModule,
    SharedComponentsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
