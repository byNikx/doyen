import { Directive, ViewContainerRef, AfterViewInit } from '@angular/core';

// Load highcharts library.
import * as Highcharts from 'highcharts';

@Directive({
  selector: '[bdGraphContainer]'
})
export class GraphContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
