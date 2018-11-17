import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  GraphModule,
  DividerModule,
  ButtonModule,
  SwitchModule,
  InputModule
} from 'projects/doyen-lib/src/public_api';
// import {
//   GraphModule,
//   DividerModule,
//   ButtonModule,
//   SwitchModule,
//   InputModule
// } from '@nikx/uma'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    GraphModule,
    DividerModule,
    ButtonModule,
    SwitchModule,
    InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
