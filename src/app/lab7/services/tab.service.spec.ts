import {TestBed} from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabService]
    });
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate the tab correctly', () => {
    const xn = 0;
    const xm = Math.PI;
    const n = 10;
    const result = service.getTab(xn, xm, n);

    expect(result.size).toBe(n);

    let currentX = xn;
    const h = (xm - xn) / n;

    result.forEach((value, key) => {
      expect(key).toBeCloseTo(currentX, 10);
      expect(value).toBeCloseTo(Math.abs(Math.sin(key)), 10);
      currentX += h;
    });
  });

  it('should handle edge case when n is zero', () => {
    const xn = 0;
    const xm = Math.PI;
    const n = 0;
    expect(() => service.getTab(xn, xm, n)).toThrowError("zero dividing")


  });

  it('should handle edge case when xm is less than xn', () => {
    const xn = Math.PI;
    const xm = 0;
    const n = 10;
    const result = service.getTab(xn, xm, n);

    expect(result.size).toBe(0);
  });
});
