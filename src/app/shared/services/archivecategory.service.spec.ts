import {TestBed} from '@angular/core/testing';

import {ArchiveCategoryService} from './archivecategory.service';

describe('ArchivecategoryService', () => {
  let service: ArchiveCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchiveCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
