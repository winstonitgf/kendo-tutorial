import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridInitComponent } from './grid-init.component';

describe('GridInitComponent', () => {
  let component: GridInitComponent;
  let fixture: ComponentFixture<GridInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
