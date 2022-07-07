import { TestBed } from '@angular/core/testing';

import { BkkApiService } from './bkk-api.service';

describe('BkkApiService', () => {
  let service: BkkApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BkkApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
