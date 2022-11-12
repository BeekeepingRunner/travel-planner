import { TestBed } from '@angular/core/testing';

import { FirestoreDataProvider } from './database-provider.service';

describe('DatabaseProviderService', () => {
  let service: FirestoreDataProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreDataProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
