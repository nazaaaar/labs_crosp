import {IPlace} from "../interfaces/IPlace";

export class Place implements IPlace {
  name: string;
  coordinates: { latitude: number; longitude: number };
  population: number;

  constructor(name: string, latitude: number, longitude: number, population: number) {
    this.name = name;
    this.coordinates = { latitude, longitude };
    this.population = population;
  }

  getDetails(): string {
    return `${this.name} is located at (${this.coordinates.latitude}, ${this.coordinates.longitude}) with a population of ${this.population}.`;
  }

  calculateDensity(area: number): number {
    return this.population / area;
  }
}
