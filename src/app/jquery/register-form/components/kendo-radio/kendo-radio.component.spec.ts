import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoRadioComponent } from './kendo-radio.component';

describe('KendoRadioComponent', () => {
  let component: KendoRadioComponent;
  let fixture: ComponentFixture<KendoRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
