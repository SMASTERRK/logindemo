import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/AuthService';
import { Router } from '@angular/Router';
import { RegisterComponent } from '../register-component/register-component.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;                    
  private formSubmitAttempt: boolean; 
  errorMsg: string;
  result: string;
  constructor(
    private fb: FormBuilder,         
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.errorMsg="";
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  

  onSubmit() {
    if (this.form.valid) {
      console.log("inside login");
      this.result=this.authService.login(this.form.value);
      if(this.result==='true'){
        this.router.navigateByUrl('register');
        this.errorMsg="";
      }else if(this.result==='admin'){
        this.router.navigateByUrl('adminaccess');
        this.errorMsg="";
      }else{
        this.errorMsg='Invalid Username/Password'
      }
    }
    this.formSubmitAttempt = true;             
  }
}

