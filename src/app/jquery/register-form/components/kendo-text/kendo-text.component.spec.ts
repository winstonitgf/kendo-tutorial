import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoTextComponent } from './kendo-text.component';

describe('KendoTextComponent', () => {
  let component: KendoTextComponent;
  let fixture: ComponentFixture<KendoTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
