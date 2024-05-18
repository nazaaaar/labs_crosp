import {ICity} from "./ICity";
import {IPlace} from "./IPlace";
import {IRegion} from "./IRegion";

export interface IMetropolis extends IPlace, ICity {
  regions: IRegion[];

  addRegion(region: IRegion): void;

  analyzeRegionData(): string;
}
