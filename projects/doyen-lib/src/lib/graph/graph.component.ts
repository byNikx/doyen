import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  ContentChild,
  AfterContentInit,
  Directive,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  Type,
  Renderer2,
  forwardRef
} from '@angular/core';

import { GraphContainerDirective } from './graph-container.directive';
import * as Highcharts from 'highcharts';
import * as Highstock from 'highcharts/highstock';
import { Options, ChartObject } from 'highcharts';
import { GraphTitleComponent } from './graph-title/graph-title.component';

export enum GraphType {
    Chart = 'chart',
    Stock = 'stock'
}

@Component({
  selector: 'bd-graph, [bd-graph]',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, AfterContentInit {

  /**
   * Graph type reference
   */
  private _graphType: GraphType;
  @Input('type') set graphType(type: GraphType){
    this._graphType = type;
  }

  get graphType(): GraphType{
    return this._graphType;
  }
  

  /**
   * Graph title reference.
   */
  private _graphTitle: GraphTitleComponent;
  @ContentChild(GraphTitleComponent) set graphTitle(title: GraphTitleComponent) {
    this._graphTitle = title;
  }

  get graphTitle(): GraphTitleComponent {
    return this._graphTitle;
  }

  /**
   * Graph title container reference.
   */
  private _graphTitleContainer: GraphTitleContainerDirective;
  @ViewChild(forwardRef(() => GraphTitleContainerDirective)) set graphTitleContainer(container: GraphTitleContainerDirective) {
    this._graphTitleContainer = container;
  }

  get graphTitleContainer(): GraphTitleContainerDirective {
    return this._graphTitleContainer;
  }

  /**
   * Property which provides access to initialized chart.
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
   */
  private _options: Options;
  @Input() set options(options: Options) {

    /**
     * Update the graph title if it's updated in the provided options,
     * and bd-graph-title component is present in the graph.
     */
    if (!this.graphTitle && this.graphTitleContainer && options.title) {
      this._loadGraphTitle(options.title.text);
    }

    /**
     * Remove the title from the supplied options,
     * and update the chart if it's already rendered.
     */
    if (this.chart) {
      options.title = null;
      this.chart.update(options);
    }
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
   */
  private _graphContainer: GraphContainerDirective;
  @ViewChild(GraphContainerDirective) set graphContainer(container: GraphContainerDirective) {
    this._graphContainer = container;
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
    private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    const optionsWithoutTitle = Object.assign({}, this.options, { title: null });
    this.chart = this._createGraph(optionsWithoutTitle, this.graphType);    
  }

  ngAfterContentInit(): void {

    /**
     * Load the bd-graph-title component if it's not available.
     */
    if (!this.graphTitle && this.options.title) {
      this._loadGraphTitle(this.options.title.text);
    }
  }

  private _createGraph(options: any, type: GraphType): any{
    if(type === GraphType.Chart){
      return Highcharts.chart(this.graphContainer.viewContainerRef.element.nativeElement, options);
    }
    else if(type === GraphType.Stock){
      return Highstock.stockChart(this.graphContainer.viewContainerRef.element.nativeElement, options);
    }else{
      return null;
    }
  }

  /**
   * Helper method which returns generated factory for the component if available.
   * @param component
   * @returns ComponentFactory<T>
   */
  private _getComponentFactory<T>(component: Type<T>): ComponentFactory<T> {
    return this.componentFactoryResolver.resolveComponentFactory(component);
  }

  /**
   * Load the bd-graph-title component and sets title text.
   * @param title
   */
  private _loadGraphTitle(title: any): void {
    const viewContainerRef = this.graphTitleContainer.viewContainerRef;
    const graphTitleComponentFactory = this._getComponentFactory(GraphTitleComponent);
    viewContainerRef.clear();
    viewContainerRef.createComponent(graphTitleComponentFactory, 0, null, [
      [this.renderer.createText(title)]
    ]);
  }

  private _loadGraphFooter(): void {
    throw new Error('Method implementation not available.');
  }

}

@Directive({
  selector: '[bdGraphTitleContainer]'
})
export class GraphTitleContainerDirective {
  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }
}
