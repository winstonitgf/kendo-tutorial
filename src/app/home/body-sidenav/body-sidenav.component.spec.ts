import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySidenavComponent } from './body-sidenav.component';

describe('BodySidenavComponent', () => {
  let component: BodySidenavComponent;
  let fixture: ComponentFixture<BodySidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
