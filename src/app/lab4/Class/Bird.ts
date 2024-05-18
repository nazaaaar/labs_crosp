export abstract class Bird {
  protected _name!: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (!value.trim()) {
      throw new Error("Name cannot be empty or contain only whitespaces");
    }
    this._name = value;
  }

  constructor(name: string) {
    this.name = name;
  }

  abstract FoodAmount(): number;
}

export class Stork extends Bird {
  private _wingspan!: number;

  get wingspan(): number {
    return this._wingspan;
  }

  set wingspan(value: number) {
    if (value <= 0) {
      throw new Error("Wingspan should be greater than 0");
    }
    this._wingspan = value;
  }

  constructor(name: string, wingspan: number) {
    super(name);
    this.wingspan = wingspan;
  }

  FoodAmount(): number {
    return this._wingspan * (1 / 2000);
  }

  override toString(): string {
    return `ЛЕЛЕКА Ім'я = ${this.name} Розмах крил= ${this.wingspan} см`;
  }
}

export class Raven extends Bird {
  private _height!: number;

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    if (value <= 0) {
      throw new Error("Height should be greater than 0");
    }
    this._height = value;
  }

  constructor(name: string, height: number) {
    super(name);
    this.height = height;
  }

  FoodAmount(): number {
    return 0.8 * this._height;
  }

  override toString(): string {
    return `ВОРОНА Ім'я = ${this.name} Висота= ${this.height} см`;
  }
}
