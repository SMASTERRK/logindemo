import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private router: Router) {}
  imagePath: string;
  ngOnInit() {
    this.imagePath = 'https://cdn-images-1.medium.com/max/1600/1*QQyisWvf3SipG6ic6tBi2w.jpeg';
  }
  submit(){
    this.router.navigateByUrl('login');
  }

}
