import { Component, OnInit } from '@angular/core';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/Router';
import { HomeComponentComponent } from '../home-component/home-component.component';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  username: string;
  password: string;
  errorMsg: string;
  constructor(private router: Router) {}

  loginfrom = new FormControl();
  ngOnInit() {
    this.username = '';
    this.password = '';
    this.errorMsg = '';
  }
  submit() {
    console.log('inside the submit');
    if (this.username === '' && this.password === '') {
      this.errorMsg = 'Please enter the credentials';
    } else if (this.username === '') {
      this.errorMsg = 'Username cant be empty';
    } else if (this.password === '') {
      this.errorMsg = 'Password cant be empty';
    } else if (this.username === 'admin') {
      if (this.password === 'admin') {
        this.errorMsg = '';
        this.router.navigateByUrl('home');
      } else {
        this.errorMsg = 'Incorrect Password';
        this.password = '';
      }
    } else {
      this.errorMsg = 'Invalid Credentials';
      this.username = '';
      this.password = '';
    }
  }
}
