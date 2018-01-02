//CORE
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Services
import { UserService } from '../../services/user.service';
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
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, public userService: UserService) {
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
      .then(user => {
        console.log(user, 'looook');
        this.completeRegistrationForm.patchValue({
          email: user['email']
        })
      })
    });
  }

  completeReg(fields) {
    
  }
}
