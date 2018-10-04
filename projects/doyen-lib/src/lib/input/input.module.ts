import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldModule } from '../form-field/form-field.module';
import { InputDirective } from './input.directive';

@NgModule({
  imports: [
    CommonModule,
    FormFieldModule,
  ],
  declarations: [
    InputDirective
  ],
  exports: [
    FormFieldModule,
    InputDirective
  ]
})
export class InputModule { }
