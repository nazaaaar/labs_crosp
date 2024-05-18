import {Bird} from "../lab4/Class/Bird";

export class Eagle extends Bird {
  private _weight!: number;

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    if (value <= 0) {
      throw new Error("Weight should be greater than 0");
    }
    this._weight = value;
  }

  constructor(name: string, weight: number) {
    super(name);
    this.weight = weight;
  }

  FoodAmount(): number {
    return this.weight * 0.02;
  }

  override toString() {
    return `ОРЕЛ Ім'я = ${this.name} Вага = ${this.weight} кг`;
  }
}
