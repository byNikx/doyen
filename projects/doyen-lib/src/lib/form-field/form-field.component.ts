import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener,
  OnDestroy,
  ViewEncapsulation,
  ContentChild
} from '@angular/core';
import { Subscription } from 'rxjs';
import { InputDirective } from '../input/input.directive';
import { LabelComponent } from './label/label.component';

interface HTMLElement {
  hasClass(c: string): boolean;
}

declare enum HTMLInputElementState {
  Error = 'error',
  Warning = 'warning',
}

const subscriptions: any[] = [];
HTMLElement.prototype['hasClass'] = function (c) {
  return this.className.split(' ').indexOf(c) > -1;
};

@Component({
  selector: 'bd-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit, OnDestroy {

  private _label: LabelComponent;
  @ContentChild(LabelComponent) set label(element: LabelComponent) {
    this._label = element;
  }
  get label() {
    return this._label;
  }

  private _inputContainer: ElementRef;
  @ViewChild('inputContainer') set inputContainer(element) {
    this._inputContainer = element;
  }
  get inputContainer() {
    return this._inputContainer.nativeElement;
  }

  private _input: ElementRef;
  @ContentChild(InputDirective, { read: ElementRef }) set input(element) {
    this._input = element;
  }
  get input() {
    return this._input.nativeElement;
  }

  @HostListener('focusin', ['$event.target']) public handleFocus(input): void {
    this._handleClass(this.inputContainer, 'active');
    input.focus();
  }

  @HostListener('focusout', ['$event.target']) public handleBlur(input): void {
    if (input.value.length <= 0) {
      this._handleClass(this.inputContainer, 'active', true);
    }
  }

  @HostListener('input', ['$event.target']) handleInput(input): void {
    this._validate(input);
  }


  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    const labelOnClick = this.label.onClicked.subscribe(e => {
      this.handleFocus(this.input);
    });
    subscriptions.push(labelOnClick);

  }

  ngOnDestroy(): void {
    subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  private _handleClass(element: HTMLElement, className: string, removeClass?: boolean): void {
    if (!removeClass && !element.hasClass(className)) {
      this.renderer.addClass(this.inputContainer, className);
    } else if (removeClass) {
      this.renderer.removeClass(this.inputContainer, className);
    }
  }

  private _validate(element: HTMLInputElement): void {
    if (!element) {
      throw new ReferenceError(`Invalid element ${element}`);
    }
    if (element.required) {
      this._handleClass(this.inputContainer, HTMLInputElementState.Error, element.checkValidity());
    }
  }

  private _updateState(state: HTMLInputElementState): void {
  }

  private _getErrorMessage(element: HTMLInputElement): string {
    return element.validationMessage;
  }

}
