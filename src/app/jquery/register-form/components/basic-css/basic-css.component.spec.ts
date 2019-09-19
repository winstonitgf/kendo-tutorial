import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCssComponent } from './basic-css.component';

describe('BasicCssComponent', () => {
  let component: BasicCssComponent;
  let fixture: ComponentFixture<BasicCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
