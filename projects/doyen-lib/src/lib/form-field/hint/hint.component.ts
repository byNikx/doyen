import { Component, OnInit, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'bd-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[bdHintContainer], [bd-hint-container]'
})
export class HintContainerDirective {
  constructor(
    private element: ElementRef
  ) { }
}
