import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { registerFields } from './register';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }
  errorMsg: string;
  register = new registerFields;

  ngOnInit() {
    this.errorMsg = "";
  }
  updateModule = new FormControl();
  updateStatus = new FormControl();

  onSubmit() {
    console.log(this.register.name, this.register.status);
    this.router.navigateByUrl('home');
    let url = 'http://localhost:8080/spring-mvc-db/user/addScore';
    // this.http.post(url, {
    //   "userId": this.register.Id,
    //   "module": this.register.Module,
    //   "score": this.register.Score,
    //   "status": this.register.Status
    // }, null).subscribe(data => { this.errorMsg=data});
    this.errorMsg='Successfully added the score for the user ';
    
  }
  onLogout() {
    this.router.navigateByUrl('login');
  }
  onCancel() {
    this.register = new registerFields;
    this.router.navigateByUrl('register');
  }

  onAdminScreen(){
    this.router.navigateByUrl('adminaccess');
  }

}

