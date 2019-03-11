import { Component, OnInit } from '@angular/core';
import { NavigationService, Navigation } from '@nshmp/nshmp-ng-template';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  navigationList: Navigation[];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationList = this.navigationService.get()
        .filter(nav => nav.display !== 'Dashboard');
  }

}
