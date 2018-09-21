import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldModule } from '../form-field/form-field.module';

@NgModule({
  imports: [
    CommonModule,
    FormFieldModule
  ],
  declarations: [],
  exports: [
    FormFieldModule
  ]
})
export class InputModule { }
