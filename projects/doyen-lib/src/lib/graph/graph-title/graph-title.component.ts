import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'bd-graph-title',
  templateUrl: './graph-title.component.html',
  styleUrls: ['./graph-title.component.scss']
})
export class GraphTitleComponent implements OnInit {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
  }

}
