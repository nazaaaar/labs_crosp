import { TestBed } from '@angular/core/testing';

import { SemesterValidatorService } from './semester-validator.service';

describe('SemsterValidatorService', () => {
  let service: SemesterValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemesterValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for valid semesters', () => {
    expect(service.isValidSemester(1)).toBeTrue();
    expect(service.isValidSemester(2)).toBeTrue();
    expect(service.isValidSemester(3)).toBeTrue();
    expect(service.isValidSemester(4)).toBeTrue();
    expect(service.isValidSemester(5)).toBeTrue();
    expect(service.isValidSemester(6)).toBeTrue();
    expect(service.isValidSemester(7)).toBeTrue();
    expect(service.isValidSemester(8)).toBeTrue();
  });

  it('should return false for invalid semesters', () => {
    expect(service.isValidSemester(0)).toBeFalse();
    expect(service.isValidSemester(9)).toBeFalse();
    expect(service.isValidSemester(-1)).toBeFalse();
    expect(service.isValidSemester(100)).toBeFalse();
  });

  it('should return false for floating point numbers', () => {
    expect(service.isValidSemester(1.5)).toBeFalse();
    expect(service.isValidSemester(3.14)).toBeFalse();
    expect(service.isValidSemester(7.8)).toBeFalse();
  });

  it('should return false for non-numeric values', () => {
    expect(service.isValidSemester(NaN)).toBeFalse();
    expect(service.isValidSemester(null as unknown as number)).toBeFalse();
    expect(service.isValidSemester(undefined as unknown as number)).toBeFalse();
  });
});
