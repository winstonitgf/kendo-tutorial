import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicJavascriptComponent } from './basic-javascript.component';

describe('BasicJavascriptComponent', () => {
  let component: BasicJavascriptComponent;
  let fixture: ComponentFixture<BasicJavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicJavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
