import { TestBed } from '@angular/core/testing';

import { TravelCommandService } from './travel-command.service';

describe('TravelCommandService', () => {
  let service: TravelCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
