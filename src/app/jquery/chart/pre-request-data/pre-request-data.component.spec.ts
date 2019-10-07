import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRequestDataComponent } from './pre-request-data.component';

describe('PreRequestDataComponent', () => {
  let component: PreRequestDataComponent;
  let fixture: ComponentFixture<PreRequestDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreRequestDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRequestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
