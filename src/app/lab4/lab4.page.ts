import { Component, OnInit } from '@angular/core';
import { Bird, Stork, Raven } from "./Class/Bird";

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
})
export class Lab4Page implements OnInit {

  birds: Bird[] = [];
  totalFoodRequirement: number = 0;

  constructor() { }

  ngOnInit() {
  }

  displayBirds() {
    this.fillBirdsArray();
  }

  fillBirdsArray() {
    this.birds = [];
    for (let i = 0; i < 10; i++) { // Fill array with 5 randomly generated birds
      this.birds.push(this.generateRandomBird());
    }
  }

  generateRandomBird(): Bird {
    const random = Math.random();
    const name = "Bird" + Math.floor(random * 1000); // Just a placeholder for the name
    if (random < 0.5) {
      const wingspan = Math.random() * 100; // Random wingspan for Stork
      return new Stork(name, wingspan);
    } else {
      const height = Math.random() * 100; // Random height for Raven
      return new Raven(name, height);
    }
  }

  calculateTotalFoodRequirement() {
    this.totalFoodRequirement = this.birds.reduce((total, bird) => total + bird.FoodAmount(), 0);
  }
}
