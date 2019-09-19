import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoDaterangeComponent } from './kendo-daterange.component';

describe('KendoDaterangeComponent', () => {
  let component: KendoDaterangeComponent;
  let fixture: ComponentFixture<KendoDaterangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoDaterangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoDaterangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
