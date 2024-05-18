import { Metropolis } from './Metropolis';
import { Region } from './Region';
import {IRegion} from "../interfaces/IRegion";
import {IMetropolis} from "../interfaces/IMetropolis";

describe('Metropolis', () => {
  let metropolis: IMetropolis;
  let region: IRegion;

  beforeEach(() => {
    metropolis = new Metropolis('MetroCity', 37.7749, -122.4194, 10000000, 'Alice Johnson');
    region = new Region('Region1', 36.1699, -115.1398, 2000000);
  });

  it('should create an instance of Metropolis', () => {
    expect(metropolis).toBeTruthy();
  });

  it('should add a region', () => {
    metropolis.addRegion(region);
    expect(metropolis.regions.length).toBe(1);
  });

  it('should analyze region data', () => {
    metropolis.addRegion(region);
    expect(metropolis.analyzeRegionData()).toBe('Region: Region1, Population: 2000000');
  });
});
