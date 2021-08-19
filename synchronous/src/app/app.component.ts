import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  firstName: string;
  lastName: string;
  siblingName: string;
  siblingNames: string[];

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.siblingName = '';
    this.siblingNames = [];
  }

  ngOnInit(): void {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/url', false);  // `false` makes the request synchronous -- it's also deprecated.
    request.send();

    if (request.status === 200) {
      this.siblingNames = JSON.parse(request.responseText);
      console.log("siblingNames = " + this.siblingNames);
    } else {
      console.log("Error in REST call: " + request.responseText);
    }

  }

}
