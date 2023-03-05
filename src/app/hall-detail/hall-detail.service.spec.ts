import { TestBed } from '@angular/core/testing';

import { HallDetailService } from './hall-detail.service';

describe('HallDetailService', () => {
  let service: HallDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HallDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
