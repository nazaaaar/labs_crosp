import {Eagle} from "./Eagle";

describe("Тестування орла", ()=>{
  let eagle: Eagle

  beforeEach(()=>{
    eagle = new Eagle("Патрон", 5);
  })

  it('should be truthy', () => {
    expect(eagle).toBeTruthy()
  });

  it('should throw weight < 0 error', () => {
    expect(()=>{eagle.weight=-1}).toThrow(Error("Weight should be greater than 0"))
  });
  it('should not create model with negative weight', () => {
    expect(()=>{ new Eagle("Патрон", -4)}).toThrow(Error("Weight should be greater than 0"))
  });
  it('should not create model with empty name', () => {
    expect(()=>{ new Eagle("", 6)}).toThrow(Error("Name cannot be empty or contain only whitespaces"))
  });
  it('should not set name to empty', () => {
    expect(()=>{eagle.name="";}).toThrow(Error("Name cannot be empty or contain only whitespaces"))
  });
  it('should calculate foodAmount properly', () => {
    const expectedFoodAmount = 5 * 0.02;

    expect(eagle.FoodAmount()).toEqual(expectedFoodAmount);
  });

})
