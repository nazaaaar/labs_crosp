import { Component } from '@angular/core';
import {bluetooth} from "ionicons/icons";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  a: number[][] =[];
  res(N: any) {
    try{
      let n = parseInt(N);
      if (isNaN(n)){
        throw Error("NaN")
      }
      if (n<=0){
        throw Error("Out of boundaries")
      }

      this.a = Array(n)
      for (let i = 0; i < n; i++) {
        this.a[i] = Array(n)
        for (let j = 0; j < n; j++) {
          let min = -50, max = 50;
          this.a[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
      }
    }
    catch (error) {console.log(error)}


  }

  getColor(j: number) {
    if (j > 0 && j < 25 && j%2==1) return 'yellow';
    return 'blue';
  }
}
