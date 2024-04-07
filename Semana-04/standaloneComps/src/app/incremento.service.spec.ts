import { TestBed } from '@angular/core/testing';

import { IncrementoService } from './incremento.service';

describe('IncrementoService', () => {
  let service: IncrementoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrementoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
