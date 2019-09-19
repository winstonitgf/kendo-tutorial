import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoSixthComponent } from './kendo-sixth.component';

describe('KendoSixthComponent', () => {
  let component: KendoSixthComponent;
  let fixture: ComponentFixture<KendoSixthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoSixthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoSixthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
