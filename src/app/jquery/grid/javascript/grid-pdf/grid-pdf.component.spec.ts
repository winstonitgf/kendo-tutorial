import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPdfComponent } from './grid-pdf.component';

describe('GridPdfComponent', () => {
  let component: GridPdfComponent;
  let fixture: ComponentFixture<GridPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
