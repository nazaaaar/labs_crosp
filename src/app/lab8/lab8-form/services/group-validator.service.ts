import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupValidatorService {

  constructor() { }

  isValidGroupName(groupName: string): boolean {
    const regex = /^(КН|АнД)-[1-4][1-9]$/;
    return regex.test(groupName);
  }
}
