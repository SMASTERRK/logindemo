import { Component, OnInit } from '@angular/core';
import { AddUserDetails } from './user';
import { Router } from '@angular/Router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-access',
  templateUrl: './admin-access.component.html',
  styleUrls: ['./admin-access.component.css']
})
export class AdminAccessComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }
  addUser = new AddUserDetails;
  errorMsg: string;
  inputfile: File;

  ngOnInit() {
    this.errorMsg = "";
    this.inputfile = null;
    this.onRefresh();
  }
  onSubmit() {
    console.log(this.addUser.name, this.addUser.id);
    this.router.navigateByUrl('home');
    let url = 'http://localhost:8080/spring-mvc-db/user/add';
    // this.http.post(url, {
    //   "id": this.addUser.id,
    //   "name": this.addUser.name,
    //   "email": this.addUser.email,
    //    }, null).subscribe(data => { this.errorMsg=data});
    this.errorMsg = 'Successfully added the new user ';

  }
  onLogout() {
    this.router.navigateByUrl('login');
  }
  onCancel() {
    this.addUser = new AddUserDetails;
    this.router.navigateByUrl('adminaccess');
  }
  onRefresh(){
    let url = 'http://localhost:8080/spring-mvc-db/user/getUser';
    // this.http.get(url, null).subscribe(data => {
    //   let jsonstring = JSON.stringify(data);
    //   let jsonObject = JSON.parse(jsonstring);
    //   this.dataSource = jsonObject;
    //   let values = Object.values(jsonObject);
    //   if (values.length > 0) {
    //     this.displayedColumns = Object.keys(values[0]);
    //   }
    // });
  }
}
