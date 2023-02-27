import { TestBed } from '@angular/core/testing';

import { HotelInterceptor } from './hotel.interceptor';

describe('HotelInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HotelInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HotelInterceptor = TestBed.inject(HotelInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
