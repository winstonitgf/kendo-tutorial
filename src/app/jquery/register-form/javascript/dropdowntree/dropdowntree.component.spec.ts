import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowntreeComponent } from './dropdowntree.component';

describe('DropdowntreeComponent', () => {
  let component: DropdowntreeComponent;
  let fixture: ComponentFixture<DropdowntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdowntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
