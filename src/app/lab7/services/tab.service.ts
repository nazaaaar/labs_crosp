import {Injectable, Optional} from '@angular/core';
import {LogService} from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class TabService {

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
    return Math.abs(Math.sin(x));
  }
}
