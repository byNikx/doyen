import { Component, OnInit, HostListener, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bd-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements OnInit, ControlValueAccessor, Validator {

  private _checked: boolean;
  set checked(status: boolean) {
    this._checked = status;
  }
  get checked(): boolean {
    return this._checked;
  }

  private _disabled: boolean = false;
  @Input('disabled') set disabled(state: boolean) {
    if (state != this.disabled) {
      this._disabled = true;
    } else {
      this.disabled = false;
    }
  }
  get disabled(): boolean {
    return this._disabled;
  }

  private _onChange: (_: any) => void;
  private _onTouched: () => void;

  @HostListener('change', ['$event.target']) handleOnChange(input): void {
    this._onChange(input.value);
  }

  constructor() { }


  ngOnInit() {
  }

  writeValue(value: any): void {
    this.checked = value;
  }
  registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }


  validate(c: AbstractControl): ValidationErrors {
    throw new Error("Method not implemented.");
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }

} 
