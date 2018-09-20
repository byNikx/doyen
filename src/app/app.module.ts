import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphModule, DividerModule, ButtonModule, SwitchModule } from 'projects/doyen-lib/src/public_api';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GraphModule,
    DividerModule,
    ButtonModule,
    SwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
