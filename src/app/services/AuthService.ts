import { Injectable } from '@angular/core';
import { Router } from '@angular/Router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

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
      return 'true';
      
    }else if(user.userName == 'super' && user.password == 'super'){
      return 'admin';
    }else {
      return 'false';
    }
  }
}

  logout() {                           
    this.loggedIn.next(false);
    this.router.navigateByUrl('login');
  }
}