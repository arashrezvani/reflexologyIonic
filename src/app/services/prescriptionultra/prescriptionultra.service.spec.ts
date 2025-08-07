import { TestBed } from '@angular/core/testing';

import { PrescriptionultraService } from './prescriptionultra.service';

describe('PrescriptionultraService', () => {
  let service: PrescriptionultraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionultraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
