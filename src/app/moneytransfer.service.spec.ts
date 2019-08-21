import { TestBed } from '@angular/core/testing';

import { MoneytransferService } from './moneytransfer.service';

describe('MoneytransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoneytransferService = TestBed.get(MoneytransferService);
    expect(service).toBeTruthy();
  });
});
