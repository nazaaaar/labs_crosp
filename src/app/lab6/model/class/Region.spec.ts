import { Region } from './Region';
import { City } from './City';
import { Metropolis } from './Metropolis';
import {IMetropolis} from "../interfaces/IMetropolis";
import {ICity} from "../interfaces/ICity";
import {IRegion} from "../interfaces/IRegion";

describe('Region', () => {
  let region: IRegion;
  let city: ICity;
  let metropolis: IMetropolis;

  beforeEach(() => {
    region = new Region('Region1', 36.1699, -115.1398, 2000000);
    city = new City('TestCity', 34.0522, -118.2437, 4000000, 'John Doe');
    metropolis = new Metropolis('MetroCity', 37.7749, -122.4194, 10000000, 'Alice Johnson');
  });

  it('should create an instance of Region', () => {
    expect(region).toBeTruthy();
  });

  it('should add a city', () => {
    region.addCity(city);
    expect(region.cities.length).toBe(1);
  });

  it('should add a metropolis', () => {
    region.addMetropolis(metropolis);
    expect(region.metropolises.length).toBe(1);
  });

  it('should conduct a census', () => {
    region.addCity(city);
    region.addMetropolis(metropolis);
    expect(region.conductCensus()).toBe(16000000);
  });

  it('should develop infrastructure', () => {
    expect(region.developInfrastructure('New transportation network')).toBe('Region1 is developing infrastructure as per the plan: New transportation network.');
  });
});
