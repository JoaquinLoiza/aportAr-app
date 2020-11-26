import { TestBed } from '@angular/core/testing';

import { SolidarityTruckService } from './solidarity-truck.service';

describe('SolidarityTruckService', () => {
  let service: SolidarityTruckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolidarityTruckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
