//CORE
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Services
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, public userService: UserService) {
    this.loginForm = fb.group({
      'email' : [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(100)])],
    })
   }

  ngOnInit() {
  }

  login(creds: any) {
    this.userService.login(creds)
    .then(res => {

    })
  }

}
