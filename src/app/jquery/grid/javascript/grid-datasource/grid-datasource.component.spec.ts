import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDatasourceComponent } from './grid-datasource.component';

describe('GridDatasourceComponent', () => {
  let component: GridDatasourceComponent;
  let fixture: ComponentFixture<GridDatasourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDatasourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDatasourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
