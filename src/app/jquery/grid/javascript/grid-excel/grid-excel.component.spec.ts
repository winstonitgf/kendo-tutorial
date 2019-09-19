import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExcelComponent } from './grid-excel.component';

describe('GridExcelComponent', () => {
  let component: GridExcelComponent;
  let fixture: ComponentFixture<GridExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
