export interface IPlace {
  name: string;
  coordinates: { latitude: number; longitude: number };
  population: number;

  getDetails(): string;
  calculateDensity(area: number): number;
}
