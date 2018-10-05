import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { LabelComponent, LabelContainerDirective } from './label/label.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormFieldComponent,
    LabelContainerDirective,
    LabelComponent
  ],
  exports: [
    FormFieldComponent,
    LabelComponent
  ]
})
export class FormFieldModule { }
