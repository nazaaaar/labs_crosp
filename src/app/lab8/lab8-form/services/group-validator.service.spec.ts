import { TestBed } from '@angular/core/testing';

import { GroupValidatorService } from './group-validator.service';

describe('GroupValidatorService', () => {
  let service: GroupValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for valid group names', () => {
    const validNames = ['КН-11', 'КН-29', 'АнД-31', 'АнД-49'];
    validNames.forEach(name => {
      expect(service.isValidGroupName(name)).toBeTrue();
    });
  });

  it('should return false for invalid group names', () => {
    const invalidNames = [
      'KN-11',
      'КН-00',
      'КН-50',
      'КН-1',
      'КН-9',
      'КН--11',
      'КН-119',
      'КН-1a',
      'КН-5',
      'КН-',
      'КН-12A',
      'АнД-00',
      'АнД-50',
      'АнД-10',
      'АнД-4',
      'АнД-',
    ];
    invalidNames.forEach(name => {
      expect(service.isValidGroupName(name)).toBeFalse();
    });
  });
});
