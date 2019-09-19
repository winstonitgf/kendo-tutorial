import { TestBed } from '@angular/core/testing';

import { LoadingProgressService } from './loading-progress.service';

describe('LoadingProgressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingProgressService = TestBed.get(LoadingProgressService);
    expect(service).toBeTruthy();
  });
});
