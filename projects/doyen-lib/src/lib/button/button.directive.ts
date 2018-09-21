import {
  Directive,
  ElementRef,
  Input,
  HostBinding
} from '@angular/core';
import { ButtonType, ButtonSize, JsTypes } from './button.constants';

@Directive({
  selector: 'a[bdButton], a[bd-button], button[bdButton], button[bd-button]'
})
export class ButtonDirective {

  /**
   * Defining color attribute for the button
   */
  @Input('color') set color(type: ButtonType) {
    this.class = type;
  }

  /**
   * Defining size attribute for the button
   */
  @Input('size') set buttonSize(size: ButtonSize) {
    this.class = size;
  }

  /**
   * Button classes manipulation which are defined in foundation framework
   */
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

  /**
   * Setting `class` property of the button
   */
  @HostBinding('class') get elementClass() {
    return this.class;
  }

  /**
   * Reset the button directive classes to make extensible
   * Note: Use it with care.
   */
  resetClass(callback: Function): void {
    this._class = [];
    if (typeof callback === JsTypes.Function) {
      callback();
    }
  }

}

@Directive({
  selector: 'a[bdHollowButton], a[bd-hollow-button], button[bdHollowButton], button[bd-hollow-button]'
})
export class HollowButtonDirective extends ButtonDirective {
  constructor(element: ElementRef) {
    super(element);
    this.class = ButtonType.Hollow;
  }
}

@Directive({
  selector: 'a[bdClearButton], a[bd-clear-button], button[bdClearButton], button[bd-clear-button]'
})
export class ClearButtonDirective extends ButtonDirective {
  constructor(element: ElementRef) {
    super(element);
    this.class = ButtonType.Clear;
  }
}

@Directive({
  selector: 'a[bdIconButton], a[bd-icon-button], button[bdIconButton], button[bd-icon-button]'
})
export class IconButtonDirective extends ButtonDirective {
  constructor(element: ElementRef) {
    super(element);
    this.class = ButtonType.Icon;
  }
}
