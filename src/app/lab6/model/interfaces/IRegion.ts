import {ICity} from "./ICity";
import {IMetropolis} from "./IMetropolis";
import {IPlace} from "./IPlace";

export interface IRegion extends IPlace {
  cities: ICity[];
  metropolises: IMetropolis[];

  addCity(city: ICity): void;

  addMetropolis(metropolis: IMetropolis): void;

  conductCensus(): number;

  developInfrastructure(plan: string): string;
}
