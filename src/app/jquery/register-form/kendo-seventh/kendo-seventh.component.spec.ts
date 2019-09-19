import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoSeventhComponent } from './kendo-seventh.component';

describe('KendoSeventhComponent', () => {
  let component: KendoSeventhComponent;
  let fixture: ComponentFixture<KendoSeventhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoSeventhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoSeventhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
