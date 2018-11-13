import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent, GraphTitleContainerDirective } from './graph.component';
import { GraphContainerDirective } from './graph-container.directive';
import { GraphTitleComponent } from './graph-title/graph-title.component';
import { GraphFooterComponent } from './graph-footer/graph-footer.component';
import { DividerModule } from '../divider/divider.module';
import { GraphToolbarComponent } from './graph-toolbar/graph-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    DividerModule
  ],
  declarations: [
    GraphComponent,
    GraphContainerDirective,
    GraphTitleComponent,
    GraphFooterComponent,
    GraphTitleContainerDirective,
    GraphToolbarComponent
  ],
  exports: [
    GraphComponent,
    GraphTitleComponent,
    GraphFooterComponent,
    GraphToolbarComponent
  ],
  entryComponents: [
    GraphTitleComponent
  ]
})
export class GraphModule { }
