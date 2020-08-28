import { TestBed } from '@angular/core/testing';

import { ContainerStatusService } from './container-status.service';

describe('ContainerStatusService', () => {
  let service: ContainerStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
