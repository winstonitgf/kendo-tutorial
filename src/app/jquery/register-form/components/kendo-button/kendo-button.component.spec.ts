import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoButtonComponent } from './kendo-button.component';

describe('KendoButtonComponent', () => {
  let component: KendoButtonComponent;
  let fixture: ComponentFixture<KendoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
