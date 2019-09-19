import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoNotificationComponent } from './kendo-notification.component';

describe('KendoNotificationComponent', () => {
  let component: KendoNotificationComponent;
  let fixture: ComponentFixture<KendoNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
