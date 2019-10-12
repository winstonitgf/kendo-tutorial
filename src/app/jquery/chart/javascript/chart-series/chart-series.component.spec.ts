import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSeriesComponent } from './chart-series.component';

describe('ChartSeriesComponent', () => {
  let component: ChartSeriesComponent;
  let fixture: ComponentFixture<ChartSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
