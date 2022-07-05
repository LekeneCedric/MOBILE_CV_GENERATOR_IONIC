import { TestBed } from '@angular/core/testing';

import { DataStatisticService } from './data-statistic.service';

describe('DataStatisticService', () => {
  let service: DataStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
