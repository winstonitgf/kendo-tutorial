import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSeriesdefaultsComponent } from './chart-seriesdefaults.component';

describe('ChartSeriesdefaultsComponent', () => {
  let component: ChartSeriesdefaultsComponent;
  let fixture: ComponentFixture<ChartSeriesdefaultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSeriesdefaultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSeriesdefaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
