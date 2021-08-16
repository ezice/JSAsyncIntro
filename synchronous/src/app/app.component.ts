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
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/url', false);  // `false` makes the request synchronous -- it's also deprecated.
    request.send();

    if (request.status === 200) {
      this.sisterNames = JSON.parse(request.responseText);
      console.log("sisterNames = " + this.sisterNames);
    } else {
      console.log("Error in REST call: " + request.responseText);
    }

  }

}
