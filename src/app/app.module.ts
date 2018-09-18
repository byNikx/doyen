import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphModule, DividerModule, ButtonModule } from 'projects/doyen-lib/src/public_api';
import { ClientStorageModule, StorageConfig, StorageType } from '@nikx/orm';

const config: StorageConfig = {
  location: StorageType.Session,
  encryption: true,
  properties: [
    {
      name: 'price'
    },
    {
      name: 'quantity'
    }
  ]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GraphModule,
    DividerModule,
    ButtonModule,
    ClientStorageModule.config(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
