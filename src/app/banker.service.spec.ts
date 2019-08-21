import { TestBed } from '@angular/core/testing';

import { BankerService } from './banker.service';

describe('BankerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankerService = TestBed.get(BankerService);
    expect(service).toBeTruthy();
  });
});
