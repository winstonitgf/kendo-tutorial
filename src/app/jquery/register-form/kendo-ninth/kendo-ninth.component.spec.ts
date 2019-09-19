import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoNinthComponent } from './kendo-ninth.component';

describe('KendoNinthComponent', () => {
  let component: KendoNinthComponent;
  let fixture: ComponentFixture<KendoNinthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoNinthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoNinthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
