import { NgModule } from '@angular/core';
import { DoyenLibComponent } from './doyen-lib.component';
import { GraphModule } from './graph/graph.module';

@NgModule({
  imports: [
    GraphModule
  ],
  declarations: [DoyenLibComponent],
  exports: [DoyenLibComponent, GraphModule]
})
export class DoyenLibModule { }
