import { TestBed } from '@angular/core/testing';

import { ConfigServiceLab11 } from './config.service';

describe('ConfigService', () => {
  let service: ConfigServiceLab11;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigServiceLab11);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
