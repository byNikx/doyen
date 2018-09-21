import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener,
  OnDestroy
} from '@angular/core';
import { LabelDirective } from './label.directive';
import { Subscription } from 'rxjs';

const subscriptions: any[] = [];
HTMLElement.prototype['hasClass'] = function (c) {
  return this.className.split(' ').indexOf(c) > -1;
};

@Component({
  selector: 'bd-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, OnDestroy {

  private _label: LabelDirective;
  @ViewChild(LabelDirective) set label(element: LabelDirective) {
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
  @ViewChild('input') set input(element) {
    this._input = element;
  }
  get input() {
    return this._input.nativeElement;
  }

  @HostListener('focusin') public handleFocus() {
    this.handleClass(this.inputContainer, 'active');
    this.input.focus();
  }

  @HostListener('focusout') public handleBlur() {
    if (this.input.value.length <= 0) {
      this.handleClass(this.inputContainer, 'active', true);
    }
  }


  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    const labelOnClick = this.label.onClicked.subscribe(e => {
      this.handleFocus();
    });
    subscriptions.concat([labelOnClick]);
  }

  ngOnDestroy(): void {
    subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  handleClass(element: HTMLElement, className: string, removeClass?: boolean): void {
    if (!removeClass && !element.hasClass(className)) {
      this.renderer.addClass(this.inputContainer, className);
    } else if (removeClass) {
      this.renderer.removeClass(this.inputContainer, className);
    }
  }

}
