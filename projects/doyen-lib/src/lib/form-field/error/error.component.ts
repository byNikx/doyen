import { Component, OnInit, Directive, ElementRef, ViewContainerRef, Renderer2 } from '@angular/core';
import { addClass, removeClass } from '../../../_util';

@Component({
  selector: 'bd-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  private _element: ElementRef;
  set element(element: ElementRef) {
    this._element = element;
  }
  get element(): ElementRef {
    return this._element;
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private rnderer: Renderer2
  ) {
    this.element = this.viewContainerRef.element;
  }

  ngOnInit(): void {
  }

  public show(): void {
    removeClass(this.element.nativeElement, 'hidden');
  }

  public hide(): void {
    addClass(this.element.nativeElement, 'hidden');
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
