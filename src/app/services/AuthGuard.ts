import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './AuthService';
import { Router } from '@angular/Router';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authservice: AuthService,private route: Router) { }
    canActivate() {
        if (this.authservice.isLoggedInAdmin == true) {
            console.log('AuthGuard#canActivate called');
            return true;
        } else {
            console.log('Error............rrrrrrrrrrrrrrrr');
            this.route.navigateByUrl('login');
            return false;
        }

    }
}