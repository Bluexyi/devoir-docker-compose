import { TestBed } from '@angular/core/testing';

import { ApiGouvService } from './api-gouv.service';

describe('ApiGouvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiGouvService = TestBed.get(ApiGouvService);
    expect(service).toBeTruthy();
  });
});
