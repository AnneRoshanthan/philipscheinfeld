import { TestBed } from '@angular/core/testing';

import { TiggerService } from './tigger.service';

describe('TiggerService', () => {
  let service: TiggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
