import { TestBed } from '@angular/core/testing';

import { DataService } from './dataservice';

describe('Data.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
