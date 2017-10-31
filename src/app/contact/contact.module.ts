//Core imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Component imports
import { ContactComponent } from './contact.component';
//Routing
import { contactRouting } from './contact.routing';

@NgModule({
  imports: [
    CommonModule,
    contactRouting
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
