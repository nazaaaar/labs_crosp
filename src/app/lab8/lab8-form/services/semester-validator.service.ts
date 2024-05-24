import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SemesterValidatorService {

  constructor() { }

  isValidSemester(semester: number): boolean {
    return Number.isInteger(semester) && semester >= 1 && semester <= 8;
  }
}
