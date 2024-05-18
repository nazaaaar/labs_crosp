import {Place} from "./Place";
import {ICity} from "../interfaces/ICity";

export class City extends Place implements ICity {
  mayor: string;

  constructor(name: string, latitude: number, longitude: number, population: number, mayor: string) {
    super(name, latitude, longitude, population);
    this.mayor = mayor;
  }

  organizeEvent(event: string): string {
    return `${this.name} is organizing the event: ${event} under the supervision of Mayor ${this.mayor}.`;
  }

  implementPolicy(policy: string): string {
    return `${this.name} is implementing the policy: ${policy} as directed by Mayor ${this.mayor}.`;
  }
}
