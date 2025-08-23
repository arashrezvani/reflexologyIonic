import { TestBed } from '@angular/core/testing';

import { PonitsService } from './ponits.service';

describe('PonitsService', () => {
  let service: PonitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PonitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
