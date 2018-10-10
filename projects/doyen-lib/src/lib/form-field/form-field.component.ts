import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener,
  OnDestroy,
  ViewEncapsulation,
  ContentChild,
  ComponentFactory,
  Type,
  ComponentFactoryResolver
} from '@angular/core';
import { Subscription } from 'rxjs';
import { InputDirective } from '../input/input.directive';
import { LabelComponent } from './label/label.component';
import { ValidationErrors } from '@angular/forms';
import { addClass, removeClass } from '../../_util';
import { ErrorComponent } from './error/error.component';
import { HintComponent } from './hint/hint.component';


const subscriptions: any[] = [];
export enum HTMLInputElementState {
  Valid = 'valid',
  Error = 'error',
  Warning = 'warning',
}

@Component({
  selector: 'bd-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit, OnDestroy {

  /**
   * Field label component reference.
   */
  private _label: LabelComponent;
  @ContentChild(LabelComponent) set label(element: LabelComponent) {
    this._label = element;
  }
  get label() {
    return this._label;
  }

  /**
   * Field error component reference.
   */
  private _error: ErrorComponent;
  @ContentChild(ErrorComponent) set error(element: ErrorComponent) {
    this._error = element;
  }
  get error() {
    return this._error;
  }

  /**
   * Field hint component reference.
   */
  private _hint: HintComponent;
  @ContentChild(HintComponent) set hint(element: HintComponent) {
    this._hint = element;
  }
  get hint() {
    return this._hint;
  }

  /**
   * Input container reference
   */
  private _inputContainer: ElementRef;
  @ViewChild('inputContainer') set inputContainer(element) {
    this._inputContainer = element;
  }
  get inputContainer() {
    return this._inputContainer.nativeElement;
  }

  /**
   * Native input element reference using InputDirective
   */
  private _input: ElementRef;
  @ContentChild(InputDirective, { read: ElementRef }) set input(element) {
    this._input = element;
  }
  get input() {
    return this._input.nativeElement;
  }

  /**
   * Listening for focus event which bubbles up from native input element
   */
  @HostListener('focusin', ['$event.target']) public handleFocus(input): void {
    addClass(this.inputContainer, 'active');
    input.focus();
  }

  /**
   * Listening for blur event which bubbles up from native input element
   */
  @HostListener('focusout', ['$event.target']) public handleBlur(input): void {
    if (input.value.length <= 0) {
      removeClass(this.inputContainer, 'active');
    }
  }

  /**
   * Listening for blur event which bubbles up from native input element
   */
  @HostListener('invalid', ['$event.target']) public handleInvalidState(input): void {
    console.log(input);
  }

  /**
   * Listening for input event which bubbles up from native input element
   */
  @HostListener('input', ['$event.target']) public handleInput(input): void {
    const validationStatus = this._validate(input);

    // Setting up field state
    this._setState(
      validationStatus ?
        validationStatus.state : HTMLInputElementState.Valid
    );

    // Setting up error message
    this._setErrorMessage(
      validationStatus ? validationStatus.message : ''
    );

    // Toggling error message visibility
    validationStatus ?
      this.error.show() : this.error.hide();
  }


  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {

  }

  ngOnInit(): void {
    const labelOnClick = this.label.onClicked.subscribe(e => {
      this.handleFocus(this.input);
    });
    subscriptions.push(labelOnClick);
    this.handleInput(this.input);
  }

  ngOnDestroy(): void {
    subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }



  private _validate(element: HTMLInputElement): ValidationErrors | null {
    if (!element) {
      throw new ReferenceError(`Invalid element ${element}`);
    }
    if (!element.validity.valid) {
      return {
        message: element.validationMessage,
        state: HTMLInputElementState.Error
      };
    }
    return null;
  }

  private _setState(state: string): void {
    const allStates = Object.values(HTMLInputElementState);
    allStates.forEach((defaultState: string) => {
      removeClass(this.inputContainer, defaultState);
    });
    addClass(this.inputContainer, state);
  }

  private _setErrorMessage(message: string): void {
    //    console.log('Setting message!', message);
  }


  private _getErrorMessage(element: HTMLInputElement): string {
    return element.validationMessage;
  }

  /**
   * Helper method which returns generated factory for the component if available.
   * @param component
   * @returns ComponentFactory<T>
   */
  _getComponentFactory<T>(component: Type<T>): ComponentFactory<T> {
    return this.componentFactoryResolver.resolveComponentFactory(component);
  }

}
