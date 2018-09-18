import { Directive, ElementRef, Input, HostBinding, HostListener } from '@angular/core';

export enum ButtonColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Alert = 'alert',
  Warning = 'warning'
}
export enum ButtonType {
  Hollow = 'hollow'
}
export enum ButtonSize {
  Tiny = 'tiny',
  Small = 'small',
  Large = 'large',
  Expanded = 'expanded'
}

@Directive({
  selector: '[bdButton], [bd-button]'
})
export class ButtonDirective {

  @Input('color') set color(type: ButtonType) {
    this.class = type;
  }

  @Input('size') set buttonSize(size: ButtonSize) {
    this.class = size;
  }

  @Input('hollow') set hollow(isHollow: string) {
    this.class = ButtonType.Hollow;
    if (isHollow === 'false') {
      this._class.splice(this._class.indexOf(ButtonType.Hollow), 1);
    }
  }

  private _class: string[] = ['button'];
  set class(name: string) {
    this._class.push(name);
  }
  get class(): string {
    return this._class.join(' ');
  }

  constructor(
    protected element: ElementRef
  ) { }

  @HostBinding('class') get elementClass() {
    return this.class;
  }

  @HostListener('click') handleDisable($e) {
    // const disabled = this.element.nativeElement.getAttribute('disabled');
    // if (disabled) {
    //   console.log('disabled');
    // } else {
    //   console.log('disabled1');
    // }
  }


}

@Directive({
  selector: '[bdHollowButton], [bd-hollow-button]'
})
export class HollowButtonDirective extends ButtonDirective {
  constructor(element: ElementRef) {
    super(element);
    this.class = ButtonType.Hollow;
  }
}
