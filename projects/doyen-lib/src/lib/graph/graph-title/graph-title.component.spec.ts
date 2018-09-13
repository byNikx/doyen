import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTitleComponent } from './graph-title.component';

describe('GraphTitleComponent', () => {
  let component: GraphTitleComponent;
  let fixture: ComponentFixture<GraphTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
