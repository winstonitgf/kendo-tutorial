import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRequestHtmlComponent } from './pre-request-html.component';

describe('PreRequestHtmlComponent', () => {
  let component: PreRequestHtmlComponent;
  let fixture: ComponentFixture<PreRequestHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreRequestHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRequestHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
