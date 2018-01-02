//CORE
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//MODULES
import { CommonModule } from '@angular/common';
//COMPONENTS
import { RegisterComponent } from './register.component';
import { CompleteRegistrationComponent } from './complete-registration/complete-registration.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent, CompleteRegistrationComponent]
})
export class RegisterModule { }
