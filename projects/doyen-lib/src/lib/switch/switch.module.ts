import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SwitchComponent } from './switch.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SwitchComponent,
  ],
  exports: [
    SwitchComponent
  ]
})
export class SwitchModule { }
