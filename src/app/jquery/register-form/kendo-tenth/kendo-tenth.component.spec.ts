import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoTenthComponent } from './kendo-tenth.component';

describe('KendoTenthComponent', () => {
  let component: KendoTenthComponent;
  let fixture: ComponentFixture<KendoTenthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoTenthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTenthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
