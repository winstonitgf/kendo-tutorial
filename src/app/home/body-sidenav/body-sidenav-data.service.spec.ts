import { TestBed } from '@angular/core/testing';

import { BodySidenavDataService } from './body-sidenav-data.service';

describe('BodySidenavDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BodySidenavDataService = TestBed.get(BodySidenavDataService);
    expect(service).toBeTruthy();
  });
});
