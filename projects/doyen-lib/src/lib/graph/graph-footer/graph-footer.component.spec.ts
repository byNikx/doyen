import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphFooterComponent } from './graph-footer.component';

describe('GraphFooterComponent', () => {
  let component: GraphFooterComponent;
  let fixture: ComponentFixture<GraphFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
