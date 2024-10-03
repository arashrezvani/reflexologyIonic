import { TestBed } from '@angular/core/testing';

import { DbinprojectService } from './dbinproject.service';

describe('DbinprojectService', () => {
  let service: DbinprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbinprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
