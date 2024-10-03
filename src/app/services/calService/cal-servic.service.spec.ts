import { TestBed } from '@angular/core/testing';

import { CalServicService } from './cal-servic.service';

describe('CalServicService', () => {
  let service: CalServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
