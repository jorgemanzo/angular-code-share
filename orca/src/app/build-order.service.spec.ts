import { TestBed } from '@angular/core/testing';

import { BuildOrderService } from './build-order.service';

describe('BuildOrderService', () => {
  let service: BuildOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
