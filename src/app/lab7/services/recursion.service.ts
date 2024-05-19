import {Injectable, Optional} from '@angular/core';
import {LogService} from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class RecursionService {

  constructor(@Optional() private logService: LogService) { }

  getTab(xn:number,xm:number,n:number)
  {
    if (n==0) throw new Error("zero dividing");
    const h = (xm-xn)/n;
    let res: Map<number,number> = new Map();
    for (let x = xn; x < xm; x+=h) {
      let y: number = this.func(x);
      res.set(x,y);
      if (this.logService) this.logService.write(x.toString()+" "+y.toString());
    }
    return res;
  }

  private func(x: number):number {

    return 2/Math.PI - 4/Math.PI*this.func_r(x,1);
  }

  private func_r(x: number, i: number):number{
    let add: number;
    const err = 1E-12

    add = Math.cos(i * 2 * x) / ((i*2 - 1) * (i*2 + 1) );
    if (Math.abs(add) > err  && i < 6000) return add + this.func_r(x,i+1);
    else return add;
  }
}
