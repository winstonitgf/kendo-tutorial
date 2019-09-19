import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasktestComponent } from './masktest.component';

describe('MasktestComponent', () => {
  let component: MasktestComponent;
  let fixture: ComponentFixture<MasktestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasktestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
