import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoSecondComponent } from './kendo-second.component';

describe('KendoSecondComponent', () => {
  let component: KendoSecondComponent;
  let fixture: ComponentFixture<KendoSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
