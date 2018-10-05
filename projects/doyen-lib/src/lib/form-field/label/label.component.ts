import { Component, OnInit, Directive, ElementRef, EventEmitter, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'bd-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  private _nativeElement: HTMLLabelElement;
  set nativeElement(element) {
    this._nativeElement = element;
  }
  get nativeElement(): HTMLLabelElement {
    return this._nativeElement;
  }

  public onClicked: EventEmitter<any> = new EventEmitter();

  @HostListener('click') handleClick() {
    this.onClicked.emit();
  }

  constructor(
    element: ElementRef
  ) {
    this.nativeElement = element.nativeElement;
  }

  ngOnInit(): void {
  }

}

@Directive({
  selector: '[bdLabelContainer], [bd-label-container]'
})
export class LabelContainerDirective {
  constructor(
    private element: ElementRef
  ) { }
}
