import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoFourthComponent } from './kendo-fourth.component';

describe('KendoFourthComponent', () => {
  let component: KendoFourthComponent;
  let fixture: ComponentFixture<KendoFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
