export abstract class Bird{
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  protected _name: string

  constructor(name: string) {
    this._name = name;
  }

  abstract FoodAmount():number;
}

export class Stork extends Bird {
  get wingspan(): number {
    return this._wingspan;
  }

  set wingspan(value: number) {
    this._wingspan = value;
  }
  private _wingspan: number;
  FoodAmount(): number {
    return this._wingspan*(1/2000);
  }


  constructor(name: string, wingspan: number) {
    super(name);
    this._wingspan = wingspan;
  }


  override toString(): string {
    return  "ЛЕЛЕКА Ім'я = " + this.name + " Розмах крил= " + this.wingspan +" см";
  }
}

export class Raven extends Bird {
  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }
  private _height: number;

  FoodAmount(): number {
    return 0.8*this._height;
  }

  constructor(name: string, height: number) {
    super(name);
    this._height = height;
  }

  override toString(): string {
    return  "ВОРОНА Ім'я = " + this.name + " Розмах крил= " + this.height +" см";
  }
}
