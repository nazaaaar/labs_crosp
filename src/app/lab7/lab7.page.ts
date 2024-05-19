import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TabService} from "./services/tab.service";
import {RecursionService} from "./services/recursion.service";
import {SeriesService} from "./services/series.service";
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-lab7',
  templateUrl: './lab7.page.html',
  styleUrls: ['./lab7.page.scss'],
})
export class Lab7Page implements OnInit {

  Inputxn!: number;
  Inputxm!: number;
  Inputn!: number;
  tabsInput: string[] = [];
  recsInput: string[] = [];
  sersInput: string[] = [];
  @ViewChild("lineCanvas") private lineCanvas?: ElementRef;
  lineChart: any;
  constructor(private tabService:TabService,
              private recService:RecursionService,
              private serService: SeriesService) {Chart.register(...registerables) }



  ngOnInit() {
  }

  tabulate() {
    const tabResult = this.tabService.getTab(this.Inputxn, this.Inputxm, this.Inputn);
    const recResult = this.recService.getTab(this.Inputxn, this.Inputxm, this.Inputn);
    const serResult = this.serService.getTab(this.Inputxn, this.Inputxm, this.Inputn);

    this.tabsInput=[];
    this.recsInput=[];
    this.sersInput=[];

    tabResult.forEach((value, key) => this.tabsInput.push(("x= " + key.toFixed(4) +" y="+ value.toFixed(4))));
    recResult.forEach((value, key) => this.recsInput.push(("x= " + key.toFixed(4) +" y="+ value.toFixed(4))));
    serResult.forEach((value, key) => this.sersInput.push(("x= " + key.toFixed(4) +" y="+ value.toFixed(4))));

    this.lineChartMethod(tabResult,recResult,serResult);
  }

  lineChartMethod(tabResult: Map<number, number>, recResult: Map<number, number>, serResult: Map<number, number>) {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    const tabData = this.extractChartData(tabResult);
    const recData = this.extractChartData(recResult);
    const serData = this.extractChartData(serResult);

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: tabData.labels,
        datasets: [
          {
            label: 'Tab Result',
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
            data: tabData.values
          },
          {
            label: 'Rec Result',
            borderColor: 'rgba(192, 75, 192, 1)',
            fill: false,
            data: recData.values
          },
          {
            label: 'Ser Result',
            borderColor: 'rgba(192, 192, 75, 1)',
            fill: false,
            data: serData.values
          }
        ]
      }
    });
  }

  private extractChartData(result: Map<number, number>) {
    const labels: string[] = [];
    const values: number[] = [];
    result.forEach((value, key) => {
      labels.push(`x=${key.toFixed(4)}`);
      values.push(value);
    });
    return { labels, values };
  }
}
