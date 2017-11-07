//Core Imports
import { Injectable } from '@angular/core';
//Models
import { User } from '../models/user';
@Injectable()
export class UserService {
  user: User = new User();

  constructor() { }

  setUser() {

  };
};
