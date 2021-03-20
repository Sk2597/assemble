import { TestBed } from '@angular/core/testing';

import { SelectPartsService } from './select-parts.service';

describe('SelectPartsService', () => {
  let service: SelectPartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectPartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
