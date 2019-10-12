import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartValueaxisComponent } from './chart-valueaxis.component';

describe('ChartValueaxisComponent', () => {
  let component: ChartValueaxisComponent;
  let fixture: ComponentFixture<ChartValueaxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartValueaxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartValueaxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
