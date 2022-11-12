import { TestBed } from '@angular/core/testing';

import { TravelQueryService } from './travel-query.service';

describe('TravelService', () => {
  let service: TravelQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
