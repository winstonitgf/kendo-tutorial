import { TestBed } from '@angular/core/testing';

import { BodySidenavService } from './body-sidenav.service';

describe('BodySidenavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BodySidenavService = TestBed.get(BodySidenavService);
    expect(service).toBeTruthy();
  });
});
