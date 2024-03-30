import { Stork } from "./Class/Bird";

describe('Тестування лелеки', () => {
  let stork: Stork;

  beforeEach(() => {
    stork = new Stork("Барон", 180);
  });

  it('should be truthy', () => {
    expect(stork).toBeTruthy();
  });

  it('should throw wingspan <= 0 error', () => {
    expect(() => { stork.wingspan = 0 }).toThrow(new Error("Wingspan should be greater than 0"));
  });

  it('should not create class with negative wingspan', () => {
    expect(() => { new Stork("Барон", -180) }).toThrow(new Error("Wingspan should be greater than 0"));
  });

  it('should not create class with empty name', () => {
    expect(() => { new Stork("", 180) }).toThrow(new Error("Name cannot be empty or contain only whitespaces"));
  });

  it('should not set name to empty', () => {
    expect(() => { stork.name = ""; }).toThrow(new Error("Name cannot be empty or contain only whitespaces"));
  });

  it('should calculate foodAmount properly', () => {
    const expectedFoodAmount = 180 * (1 / 2000);

    expect(stork.FoodAmount()).toEqual(expectedFoodAmount);
  });
});
