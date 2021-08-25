import {TestBed} from '@angular/core/testing';

import {ArchivecategoryService} from './archivecategory.service';

describe('ArchivecategoryService', () => {
  let service: ArchivecategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivecategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
