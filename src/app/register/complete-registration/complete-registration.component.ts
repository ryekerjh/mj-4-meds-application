//CORE
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Services
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
//3rd PARTY
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-complete-registration',
  templateUrl: './complete-registration.component.html',
  styleUrls: ['./complete-registration.component.scss']
})
export class CompleteRegistrationComponent implements OnInit {
  private token: any;
  user: Object = {
    email: "",
    firstName: "",
    lastName: ""
  };
  completeMode: Boolean = false;
  completeRegistrationForm: FormGroup;
  verified: Boolean = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, public userService: UserService, public auth: AuthService) {
    this.completeRegistrationForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'street' : [null, Validators.required],
      'apt' : [null],
      'city' : [null, Validators.required],
      'state' : [null, Validators.required],
      'zip' : [null, Validators.compose([Validators.required, Validators.pattern("^\d{5}(?:[-\s]\d{4})?$")])],
      'email' : [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(100)])],
      'password2' : [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(100)])]
    });
   }

  ngOnInit() {
    this.token = this.route.params.subscribe(params => {
      params != null ? this.completeMode == true : this.completeMode == false;
      this.userService.getUserRegistrationDetails(params.token)
      .then(res => {
        this.auth.storeTempToken(res['token'])
        this.completeRegistrationForm.patchValue({
          email: res['user']['email'],
          firstName: res['user']['firstName'],
          lastName: res['user']['lastName']
        })
      })
    });
  }

  completeReg(fields) {
    delete fields.password2;
    this.userService.completeRegistration(fields)
    .then(res => {
      let creds = {email: fields.email, password: fields.password};
      this.auth.login(creds)
      .subscribe(returned => {
        const verified = this.auth.isLoggedIn();
        if(verified){
          this.verified = true;
          this.router.navigate(['/products']);
        } else {
          // this.toastService.toast({message: 'Something went wrong with your login. You are not authorized to access this page.'})
          this.router.navigate(['/login']);
        }
      })
    })
    .catch(e => {
      console.log(e, 'error');
    });
  }
}
