import {Raven} from "./Class/Bird";

describe('Тестування ворони', () => {
  let raven: Raven;

  beforeEach(() => {
    raven = new Raven("Джавелін", 50);
  });

  it('should be truthy', () => {
    expect(raven).toBeTruthy();
  });


  it('should throw height < 0 error', () => {
    expect(() => { raven.height = -1 }).toThrow(new Error("Height should be greater than 0"));
  });

  it('should not create class with negative height', () => {
    expect(() => { new Raven("Джавелін", -40) }).toThrow(new Error("Height should be greater than 0"));
  });

  it('should not create class with empty name', () => {
    expect(() => { new Raven("", 60) }).toThrow(new Error("Name cannot be empty or contain only whitespaces"));
  });

  it('should not set name to empty', () => {
    expect(() => { raven.name = ""; }).toThrow(new Error("Name cannot be empty or contain only whitespaces"));
  });

  it('should calculate foodAmount properly', () => {
    const expectedFoodAmount = 0.8 * 50;

    expect(raven.FoodAmount()).toEqual(expectedFoodAmount);
  });
});
