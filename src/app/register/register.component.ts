//CORE
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//SERVICES
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  response: any;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, public userService: UserService) { 
    this.registerForm = fb.group({
      'email' : [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'agree' : [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  register(user:any) {
    console.log(user, 'look');
    return this.userService.beginRegistration(user)
    .then(res => {
      this.submitted = true;
      this.response = res;
    });
  }
}
