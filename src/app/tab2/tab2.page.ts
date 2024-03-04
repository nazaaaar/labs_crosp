import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  d: number = 0;
  constructor() {}

  res(a: any, b: any) {
    let d = 0;
    try{
      a = parseFloat(a);
      b = parseFloat(b);

      if (isNaN(a) || isNaN(b)){
        throw new Error("Parameter is not a number");
      }
    }
    catch (error) {console.log(error);}

    for (let i = a; i < b; i++) {
      if (i%5 ==4 && i%6==5){
        d++;
      }
    }

    this.d = d;

  }
}
