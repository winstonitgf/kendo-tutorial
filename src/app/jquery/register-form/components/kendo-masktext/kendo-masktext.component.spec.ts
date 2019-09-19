import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoMasktextComponent } from './kendo-masktext.component';

describe('KendoMasktextComponent', () => {
  let component: KendoMasktextComponent;
  let fixture: ComponentFixture<KendoMasktextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoMasktextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoMasktextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
