import { Component, OnInit } from '@angular/core';
import { Navigation } from '@nshmp/nshmp-ng-template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'example';

  navigationList: Navigation[] = [
    {
      display: 'Dashboard',
      routerLink: ''
    },
    {
      display: 'Error Example',
      routerLink: 'error'
    }
  ];

  constructor() { }

  ngOnInit() {

  }

}
