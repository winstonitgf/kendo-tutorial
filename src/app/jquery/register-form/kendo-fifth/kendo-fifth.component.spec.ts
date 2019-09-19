import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoFifthComponent } from './kendo-fifth.component';

describe('KendoFifthComponent', () => {
  let component: KendoFifthComponent;
  let fixture: ComponentFixture<KendoFifthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoFifthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
