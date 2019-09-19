import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoDropdownlistComponent } from './kendo-dropdownlist.component';

describe('KendoDropdownlistComponent', () => {
  let component: KendoDropdownlistComponent;
  let fixture: ComponentFixture<KendoDropdownlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoDropdownlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoDropdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
