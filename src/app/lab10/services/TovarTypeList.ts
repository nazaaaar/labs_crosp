import {TovarType} from "./TovarType";

export class TovarTypeList{
  tovars = new Map();

  constructor() {
    this.tovars.set(0,new TovarType(
      0,
      "Хлібобулочні вироби"
    ))

    this.tovars.set(1,new TovarType(
      1,
      "Газовані напої"
    ))
  }

  add(tovarType: TovarType){
    this.tovars.set(tovarType.id,tovarType);
  }
}
