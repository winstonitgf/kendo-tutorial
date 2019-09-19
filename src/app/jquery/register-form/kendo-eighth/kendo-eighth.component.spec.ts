import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoEighthComponent } from './kendo-eighth.component';

describe('KendoEighthComponent', () => {
  let component: KendoEighthComponent;
  let fixture: ComponentFixture<KendoEighthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoEighthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoEighthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
