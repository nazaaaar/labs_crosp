import { City } from './City';
import {ICity} from "../interfaces/ICity";

describe('City', () => {
  let city: ICity;

  beforeEach(() => {
    city = new City('TestCity', 34.0522, -118.2437, 4000000, 'John Doe');
  });

  it('should create an instance of City', () => {
    expect(city).toBeTruthy();
  });

  it('should organize an event', () => {
    expect(city.organizeEvent('Music Festival')).toBe('TestCity is organizing the event: Music Festival under the supervision of Mayor John Doe.');
  });

  it('should implement a policy', () => {
    expect(city.implementPolicy('Green Energy Initiative')).toBe('TestCity is implementing the policy: Green Energy Initiative as directed by Mayor John Doe.');
  });
});
