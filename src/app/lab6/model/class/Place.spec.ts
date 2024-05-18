import { Place } from './Place';
import {IPlace} from "../interfaces/IPlace";

describe('Place', () => {
  let place: IPlace;

  beforeEach(() => {
    place = new Place('TestPlace', 40.7128, -74.0060, 5000);
  });

  it('should create an instance of Place', () => {
    expect(place).toBeTruthy();
  });

  it('should return the correct details', () => {
    expect(place.getDetails()).toBe('TestPlace is located at (40.7128, -74.006) with a population of 5000.');
  });

  it('should calculate the population density correctly', () => {
    expect(place.calculateDensity(10)).toBe(500);
  });
});
