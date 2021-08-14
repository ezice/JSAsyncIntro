import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  firstName: string;
  lastName: string;
  sisterName: string;
  sisterNames: string[];

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.sisterName = '';
    this.sisterNames = [];
  }

  ngOnInit(): void {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/url", true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null); 
  }
}
