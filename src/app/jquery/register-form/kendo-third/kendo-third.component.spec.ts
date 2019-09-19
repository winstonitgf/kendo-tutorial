import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoThirdComponent } from './kendo-third.component';

describe('KendoThirdComponent', () => {
  let component: KendoThirdComponent;
  let fixture: ComponentFixture<KendoThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
