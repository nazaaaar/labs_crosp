import { Injectable } from '@angular/core';
import {TovarTypeList} from "./TovarTypeList";
import {BehaviorSubject} from "rxjs";
import {TovarType} from "./TovarType";

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceLab11 {
  currentType = DEFAULT_TYPE;
  tovarType$: BehaviorSubject<TovarType> = new BehaviorSubject<TovarType>(DEFAULT_TYPE);
  constructor() { }

  setType(type: TovarType){
    this.tovarType$.next(type);
  }
}

const DEFAULT_TYPE = { id: 0,
  name: "Хлібобулочні вироби"};
