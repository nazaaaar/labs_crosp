import {TovarType} from "./TovarType";

export class TovarTypeList{
  tovars: TovarType[] = [];

  constructor() {
  }

  add(tovarType: TovarType){
    this.tovars.push(tovarType);
  }
}
