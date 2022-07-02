import { TestBed } from '@angular/core/testing';

import { DataqrcodeService } from './dataqrcode.service';

describe('DataqrcodeService', () => {
  let service: DataqrcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataqrcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
