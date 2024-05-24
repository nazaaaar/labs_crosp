import {AbstractControl, ValidatorFn} from "@angular/forms";
import {GroupValidatorService} from "../services/group-validator.service";

export function groupValidator():ValidatorFn {
  return(control: AbstractControl):
  {[key: string]: boolean}| null =>{
    let validator = new GroupValidatorService()
    const value = control.value;
    const valid = (value === null || value === undefined) || validator.isValidGroupName(value);
    return valid ? null : { date: true };
  }
}
