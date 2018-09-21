import { Directive, ElementRef, OnInit, HostListener, Renderer2, EventEmitter } from '@angular/core';

@Directive({
  selector: '[bdLabel], [bd-label]'
})
export class LabelDirective implements OnInit {

  private label: HTMLLabelElement;
  public onClicked: EventEmitter<any> = new EventEmitter();

  @HostListener('click') handleClick() {
    //    this.renderer.addClass(this.label, 'active');
    this.onClicked.emit();
  }

  constructor(
    private elment: ElementRef,
    private renderer: Renderer2
  ) {
    this.label = this.elment.nativeElement;
  }

  ngOnInit(): void {
  }


}
