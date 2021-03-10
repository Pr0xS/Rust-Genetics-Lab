import { TestBed } from '@angular/core/testing';

import { GeneticsService } from './genetics.service';

describe('GeneticsService', () => {
  let service: GeneticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
