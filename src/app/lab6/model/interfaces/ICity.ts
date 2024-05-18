import {IPlace} from "./IPlace";

export interface ICity extends IPlace {
  mayor: string;

  organizeEvent(event: string): string;

  implementPolicy(policy: string): string;
}
