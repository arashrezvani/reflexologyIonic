import { TestBed } from '@angular/core/testing';

import { NervesService } from './nerves.service';

describe('NervesService', () => {
  let service: NervesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NervesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
