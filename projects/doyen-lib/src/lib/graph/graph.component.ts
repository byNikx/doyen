import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
  KeyValueDiffer,
  KeyValueDiffers,
  DoCheck
} from '@angular/core';

import { GraphContainerDirective } from './graph-container.directive';
import * as Highcharts from 'highcharts';
import { Options, ChartObject } from 'highcharts';

@Component({
  selector: 'bd-graph, [bd-graph]',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, DoCheck, OnChanges {

  /**
   * Setting up deep watch on options property.
   * @type KeyValueDiffer<any, any>.
   */
  private _optionsDiffer: KeyValueDiffer<any, any>;
  set optionsDiffer(differ: KeyValueDiffer<any, any>) {
    this._optionsDiffer = differ;
  }

  get optionsDiffer(): KeyValueDiffer<any, any> {
    return this._optionsDiffer;
  }

  /**
   * Property which provides access to initialized chart.
   * @type ChartObject
   */
  private _chart: ChartObject;
  set chart(chart: ChartObject) {
    this._chart = chart;
  }

  get chart(): ChartObject {
    return this._chart;
  }

  /**
   * Options attribute for drawning the chart.
   * @type Options
   */
  private _options: Options;
  @Input() set options(options: Options) {
    //    console.log(options);
    this._options = options;
  }

  /**
   * Property which provides chart options.
   * @return Options
   */
  get options(): Options {
    return this._options;
  }

  /**
   * Graph container reference.
   * @type GraphContainerDirective
   */
  private _graphContainer: GraphContainerDirective;
  @ViewChild(GraphContainerDirective) set graphContainer(graphContainer: GraphContainerDirective) {
    this._graphContainer = graphContainer;
  }

  /**
   * Property which provides reference to graphContainer.
   * @returns GraphContainerDirective
   */
  get graphContainer(): GraphContainerDirective {
    return this._graphContainer;
  }

  constructor(
    private element: ElementRef,
    private differs: KeyValueDiffers
  ) { }

  ngOnInit(): void {
    this.optionsDiffer = this.differs.find(this.options).create();
    this.chart = Highcharts.chart(this.graphContainer.viewContainerRef.element.nativeElement, this.options);
  }

  ngDoCheck(): void {
    const newChange = this.optionsDiffer.diff(this.options);
    //    this.chart.update(this.options);
    if (newChange) {
      console.log(newChange);
      //      this.options = Object.assign({}, this.options);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.options);
  }
}
