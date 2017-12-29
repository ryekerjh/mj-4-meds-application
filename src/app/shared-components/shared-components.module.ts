//Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SidebarComponent
  ]
})
export class SharedComponentsModule { }
