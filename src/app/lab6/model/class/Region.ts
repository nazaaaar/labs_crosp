import { IRegion } from "../interfaces/IRegion";
import {Place} from "./Place";
import {ICity} from "../interfaces/ICity";
import {IMetropolis} from "../interfaces/IMetropolis";

export  class Region extends Place implements IRegion {
  cities: ICity[];
  metropolises: IMetropolis[];

  constructor(name: string, latitude: number, longitude: number, population: number) {
    super(name, latitude, longitude, population);
    this.cities = [];
    this.metropolises = [];
  }

  addCity(city: ICity): void {
    this.cities.push(city);
  }

  addMetropolis(metropolis: IMetropolis): void {
    this.metropolises.push(metropolis);
  }

  conductCensus(): number {
    let totalPopulation = this.population;
    this.cities.forEach(city => totalPopulation += city.population);
    this.metropolises.forEach(metropolis => totalPopulation += metropolis.population);
    return totalPopulation;
  }

  developInfrastructure(plan: string): string {
    return `${this.name} is developing infrastructure as per the plan: ${plan}.`;
  }
}
