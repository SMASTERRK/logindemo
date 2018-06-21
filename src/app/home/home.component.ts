import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'view-score',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[];
  dataSource: PeriodicElement[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.dataSource = ELEMENT_DATA;
    let url = 'http://localhost:8080/spring-mvc-db/user/getScore';
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
  onRefresh(){
    let url = 'http://localhost:8080/spring-mvc-db/user/getScore';
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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

