import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoUploadComponent } from './kendo-upload.component';

describe('KendoUploadComponent', () => {
  let component: KendoUploadComponent;
  let fixture: ComponentFixture<KendoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
