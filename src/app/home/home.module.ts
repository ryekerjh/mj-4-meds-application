//Core imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { HomeComponent } from './home.component';
//routing
import { homeRouting } from './home.routing';
@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
