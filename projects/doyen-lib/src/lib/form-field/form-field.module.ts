import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { LabelComponent, LabelContainerDirective } from './label/label.component';
import { HintComponent, HintContainerDirective } from './hint/hint.component';
import { ErrorComponent, ErrorContainerDirective } from './error/error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormFieldComponent,
    LabelComponent,
    HintComponent,
    ErrorComponent,
    LabelContainerDirective,
    ErrorContainerDirective,
    HintContainerDirective
  ],
  exports: [
    FormFieldComponent,
    LabelComponent,
    ErrorComponent,
    HintComponent
  ]
})
export class FormFieldModule { }
