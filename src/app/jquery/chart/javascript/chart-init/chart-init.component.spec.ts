import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInitComponent } from './chart-init.component';

describe('ChartInitComponent', () => {
  let component: ChartInitComponent;
  let fixture: ComponentFixture<ChartInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
