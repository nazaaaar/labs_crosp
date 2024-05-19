import { Component, OnInit } from '@angular/core';
import {Place} from "./model/class/Place";
import {City} from "./model/class/City";
import {Metropolis} from "./model/class/Metropolis";
import {Region} from "./model/class/Region";

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
})
export class Lab6Page {
  // Place-related properties
  placeName!: string;
  placeLatitude!: number;
  placeLongitude!: number;
  placePopulation!: number;
  placeArea!: number;
  place!: Place;
  placeDensityResult!: string;

  // City-related properties
  cityName!: string;
  cityLatitude!: number;
  cityLongitude!: number;
  cityPopulation!: number;
  cityMayor!: string;
  eventName!: string;
  policyName!: string;
  city!: City;
  cityEventResult!: string;
  cityPolicyResult!: string;

  // Metropolis-related properties
  metropolisName!: string;
  metropolisLatitude!: number;
  metropolisLongitude!: number;
  metropolisPopulation!: number;
  metropolisMayor!: string;
  regionForMetropolisName!: string;
  regionForMetropolisPopulation!: number;
  metropolis!: Metropolis;
  metropolisRegionResult!: string;
  metropolisAnalyzeResult!: string;

  // Region-related properties
  regionName!: string;
  regionLatitude!: number;
  regionLongitude!: number;
  regionPopulation!: number;
  infrastructurePlan!: string;
  region!: Region;
  regionCensusResult!: string;
  regionInfrastructureResult!: string;

  constructor() {}

  createPlace() {
    this.place = new Place(this.placeName, this.placeLatitude, this.placeLongitude, this.placePopulation);
  }

  onCalculateDensity() {
    const density = this.place.calculateDensity(this.placeArea);
    this.placeDensityResult = `Population Density: ${density}`;
  }

  createCity() {
    this.city = new City(this.cityName, this.cityLatitude, this.cityLongitude, this.cityPopulation, this.cityMayor);
  }

  onOrganizeEvent() {
    this.cityEventResult = this.city.organizeEvent(this.eventName);
  }

  onImplementPolicy() {
    this.cityPolicyResult = this.city.implementPolicy(this.policyName);
  }

  createMetropolis() {
    this.metropolis = new Metropolis(this.metropolisName, this.metropolisLatitude, this.metropolisLongitude, this.metropolisPopulation, this.metropolisMayor);
  }

  onAddRegion() {
    const newRegion = new Region(this.regionForMetropolisName, 0, 0, this.regionForMetropolisPopulation);
    this.metropolis.addRegion(newRegion);
    this.metropolisRegionResult = `Added region: ${newRegion.name} with population ${newRegion.population}`;
  }

  onAnalyzeRegionData() {
    this.metropolisAnalyzeResult = this.metropolis.analyzeRegionData();
  }

  createRegion() {
    this.region = new Region(this.regionName, this.regionLatitude, this.regionLongitude, this.regionPopulation);
  }

  onConductCensus() {
    const totalPopulation = this.region.conductCensus();
    this.regionCensusResult = `Total Population: ${totalPopulation}`;
  }

  onDevelopInfrastructure() {
    this.regionInfrastructureResult = this.region.developInfrastructure(this.infrastructurePlan);
  }
}
