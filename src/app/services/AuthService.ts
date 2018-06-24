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
  adminAccess: boolean;

  constructor(
    private router: Router
  ) { }
  login(user: User) {
    this.adminAccess = null;
    if (user.userName !== '' && user.password !== '') {
      if (user.userName === 'admin' && user.password === 'admin') {
        this.loggedIn.next(true);
        this.adminAccess = false;
        return 'true';
      } else if (user.userName === 'super' && user.password === 'super') {
        this.adminAccess = true;
        return 'admin';
      } else {
        this.adminAccess = false;
        return 'false';
      }
    }
    this.getDetails();
  }
  getDetails() {
    return this.adminAccess;
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigateByUrl('login');
  }
}
