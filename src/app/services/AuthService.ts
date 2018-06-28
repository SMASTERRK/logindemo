import { Injectable } from '@angular/core';
import { Router } from '@angular/Router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedInAdmin: boolean;
  isLoggedInUser: boolean;
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(user: User){
    if (user.userName !== '' && user.password !== '' ) { 
      if (user.userName == 'admin' && user.password == 'admin' ) { 
      this.loggedIn.next(true);
      this.isLoggedInAdmin=false;
      this.isLoggedInUser=true;
      return 'true';
      
    }else if(user.userName == 'super' && user.password == 'super'){
      this.isLoggedInAdmin=true;
      this.isLoggedInUser=true;
      return 'admin';
    }else {
      this.isLoggedInAdmin=false;
      this.isLoggedInUser=false;
      return 'false';
    }
  }
}

  logout() {                           
    this.loggedIn.next(false);
    this.router.navigateByUrl('login');
  }
}