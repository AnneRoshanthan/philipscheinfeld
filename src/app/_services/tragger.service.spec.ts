import { TestBed } from '@angular/core/testing';

import { TraggerService } from './tragger.service';

describe('TraggerService', () => {
  let service: TraggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
