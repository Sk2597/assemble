import { TestBed } from '@angular/core/testing';

import { AssemblePartsService } from './assemble-parts.service';

describe('AssemblePartsService', () => {
  let service: AssemblePartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssemblePartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
