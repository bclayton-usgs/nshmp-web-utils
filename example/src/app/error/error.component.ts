import { Component, OnInit } from '@angular/core';

import { NshmpError } from '../../../..';

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
