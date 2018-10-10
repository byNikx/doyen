import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[bdInput], [bd-input]'
})
export class InputDirective {

  private _input: HTMLInputElement;
  set input(input: HTMLInputElement) {
    this._input = input;
  }
  get input(): HTMLInputElement {
    return this._input;
  }

  constructor(
    element: ElementRef
  ) {
    this.input = element.nativeElement;
  }

}
