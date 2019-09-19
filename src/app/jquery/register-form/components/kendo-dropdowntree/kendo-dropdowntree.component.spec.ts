import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoDropdowntreeComponent } from './kendo-dropdowntree.component';

describe('KendoDropdowntreeComponent', () => {
  let component: KendoDropdowntreeComponent;
  let fixture: ComponentFixture<KendoDropdowntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoDropdowntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoDropdowntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
