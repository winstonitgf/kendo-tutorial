import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoSwitchComponent } from './kendo-switch.component';

describe('KendoSwitchComponent', () => {
  let component: KendoSwitchComponent;
  let fixture: ComponentFixture<KendoSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
