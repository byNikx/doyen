import { Component, OnInit, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'bd-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[bdErrorContainer], [bd-label-container]'
})
export class ErrorContainerDirective {
  constructor(
    private element: ElementRef
  ) { }
}
