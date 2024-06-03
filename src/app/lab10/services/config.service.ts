import { Injectable } from '@angular/core';
import {TovarTypeList} from "./TovarTypeList";
import {BehaviorSubject} from "rxjs";
import {TovarType} from "./TovarType";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  currentType = DEFAULT_TYPE;
  tovarType$: BehaviorSubject<TovarType> = new BehaviorSubject<TovarType>(DEFAULT_TYPE);
  constructor() { }

  setType(type: TovarType){
    this.tovarType$.next(type);
  }
}

const tovarList = new TovarTypeList();
const DEFAULT_TYPE = tovarList.tovars.get(0);
