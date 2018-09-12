import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyenLibComponent } from './doyen-lib.component';

describe('DoyenLibComponent', () => {
  let component: DoyenLibComponent;
  let fixture: ComponentFixture<DoyenLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyenLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyenLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
