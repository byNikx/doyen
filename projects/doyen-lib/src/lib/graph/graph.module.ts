import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';
import { GraphContainerDirective } from './graph-container.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GraphComponent,
    GraphContainerDirective
  ],
  exports: [
    GraphComponent,
  ]
})
export class GraphModule { }
