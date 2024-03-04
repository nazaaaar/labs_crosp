import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;

  constructor() {}
  res(a: any, b:any, c:any){
    try{
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.c = parseFloat(c);
      this.d = 0;

      if (isNaN(a) || isNaN(b) || isNaN(c)){
        throw new Error("Parameter is not a number");
      }
    }
    catch (error) {console.log(error);}

    if (!(this.a % 2 == 1 && this.b % 2 == 1 && this.c % 2 == 1)) {
      this.d = (this.a + this.b + this.c) / 3;
    } else {
      this.d = this.a + this.b + this.c;
    }

  }
}
