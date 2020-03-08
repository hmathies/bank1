import { TestBed } from '@angular/core/testing';

import { BbvaService } from './bbva.service';

describe('BbvaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BbvaService = TestBed.get(BbvaService);
    expect(service).toBeTruthy();
  });
});
