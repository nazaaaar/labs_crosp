import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  write (logMassage:string){
    console.log("logService:", logMassage)
  }
  constructor() { }
}
