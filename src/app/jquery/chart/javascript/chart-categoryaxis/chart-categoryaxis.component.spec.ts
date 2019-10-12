import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCategoryaxisComponent } from './chart-categoryaxis.component';

describe('ChartCategoryaxisComponent', () => {
  let component: ChartCategoryaxisComponent;
  let fixture: ComponentFixture<ChartCategoryaxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCategoryaxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCategoryaxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
