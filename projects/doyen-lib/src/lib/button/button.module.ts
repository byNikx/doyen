import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective, HollowButtonDirective } from './button.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonDirective,
    HollowButtonDirective,
  ],
  exports: [
    ButtonDirective,
    HollowButtonDirective
  ]
})
export class ButtonModule { }
