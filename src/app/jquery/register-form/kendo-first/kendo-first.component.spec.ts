import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoFirstComponent } from './kendo-first.component';

describe('KendoFirstComponent', () => {
  let component: KendoFirstComponent;
  let fixture: ComponentFixture<KendoFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
