import { NgModule } from '@angular/core';
import { DoyenLibComponent } from './doyen-lib.component';
import { GraphModule } from './graph/graph.module';
import { DividerModule } from './divider/divider.module';

@NgModule({
  imports: [
    GraphModule,
    DividerModule
  ],
  declarations: [DoyenLibComponent],
  exports: [
    DoyenLibComponent,
    GraphModule,
    DividerModule
  ]
})
export class DoyenLibModule { }
