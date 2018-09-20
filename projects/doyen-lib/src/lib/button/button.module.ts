import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  HollowButtonDirective,
  ClearButtonDirective,
  IconButtonDirective
} from './button.directive';
import { ButtonGroupComponent } from './button-group/button-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonDirective,
    HollowButtonDirective,
    ClearButtonDirective,
    IconButtonDirective,
    ButtonGroupComponent
  ],
  exports: [
    ButtonDirective,
    HollowButtonDirective,
    ClearButtonDirective,
    IconButtonDirective,
    ButtonGroupComponent
  ]
})
export class ButtonModule { }
