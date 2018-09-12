import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoyenLibModule } from 'projects/doyen-lib/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DoyenLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
