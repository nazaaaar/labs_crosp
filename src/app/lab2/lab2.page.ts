import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart, registerables} from "chart.js";
import _default from "chart.js/dist/plugins/plugin.legend";
import labels = _default.defaults.labels;

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.page.html',
  styleUrls: ['./lab2.page.scss'],
})
export class Lab2Page implements OnInit {

  constructor() {Chart.register(...registerables) }

  @ViewChild("lineCanvas") private lineCanvas?: ElementRef;
  lineChart: any;
  a: number = 0;
  data: string[] = [];
  xx: string[] = [];
  yy: number[] = [];
  tabulate(xn:any, xm:any, n:any,a:any){
    this.data = [];
    xn = parseFloat(xn);
    xm = parseFloat(xm);
    n = parseFloat(n);
    a = parseFloat(a);
    this.xx = [];
    this.yy = [];
    let h = (xm-xn)/n;
    this.a = a;
    for (let x = xn; x < xm; x+=h) {
      let y = this.func(x);
      this.data.push( "x=" + x.toFixed(1) + " y=" + y.toFixed(1))
      this.xx.push(x.toFixed(1));
      this.yy.push(parseFloat(y.toFixed(1)));
    }
    this.lineChartMethod();
  }

  lineChartMethod(){
    if (this.lineChart instanceof Chart){
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement,{
      type: "line",
      data:{
          labels: this.xx,
          datasets: [
            {
              label: "Графік функції",
              fill: false,
              borderColor: 'rgba(75,192,192,1)',
              borderDashOffset: 0.0,
              pointRadius: 1,
              data: this.yy,
              spanGaps: false
            }
          ]
      }
    })
  }

  func(x:any){
    if (x<=0){
      return this.func1(x);
    }
    else if (x<=this.a)
      return this.func2(x);
    return this.func3(x);
  }
  func1(x: any){
    return Math.exp(x)*Math.log(Math.abs(x))*(1/Math.tan(Math.pow(3*x-1,2)))
  }
  func2(x: any){
    return 5/(Math.tan(2*x+3)+1)
  }
  func3(x:any){
    return Math.pow(3*x-1,2)/(Math.pow(x,5)+Math.sin(Math.pow(x+2,3)));
  }
  ngOnInit() {
  }

}
