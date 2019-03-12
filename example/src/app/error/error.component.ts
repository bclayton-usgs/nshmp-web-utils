import { Component, OnInit } from '@angular/core';
import { NshmpError } from '@nshmp/nshmp-web-utils';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    NshmpError.throwError('Error example');
  }

}
