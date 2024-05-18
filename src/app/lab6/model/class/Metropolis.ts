import {IRegion} from "../interfaces/IRegion";
import {IMetropolis} from "../interfaces/IMetropolis";
import {City} from "./City";

export class Metropolis extends City implements IMetropolis {
  regions: IRegion[];

  constructor(name: string, latitude: number, longitude: number, population: number, mayor: string) {
    super(name, latitude, longitude, population, mayor);
    this.regions = [];
  }

  addRegion(region: IRegion): void {
    this.regions.push(region);
  }

  analyzeRegionData(): string {
    return this.regions.map(region => `Region: ${region.name}, Population: ${region.population}`).join('\n');
  }
}
