import { AbstractControl, ValidatorFn } from "@angular/forms";
import { SemesterValidatorService } from "../services/semester-validator.service";

export function semesterValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const validator = new SemesterValidatorService();
    const value = control.value;
    const valid = (value === null || value === undefined) || validator.isValidSemester(value);
    return valid ? null : { date: true };
  };
}
