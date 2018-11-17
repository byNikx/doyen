import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DividerModule, ButtonModule } from '@nikx/uma';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DividerModule,
    ButtonModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
