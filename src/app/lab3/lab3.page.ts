import {Component, Input, OnInit} from '@angular/core';
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
})
export class Lab3Page implements OnInit {

  loading: any
  dataUrl = "https://api.jsonbin.io/v3/b/660006711ebb4e0e4c719c84";
  data: any = [];
  data_users: any = [];
  showDetails:boolean[] = [];
  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async load() {
    this.loading = await this.loadingController.create({
      spinner: "bubbles",
      message: "Завантаженя.. .."
    });

    await this.loading.present();

    fetch(this.dataUrl)
      .then(res => res.json())
      .then(json => {
        this.data = json;
        if (this.data && this.data.record) {
          for (const dataKey in this.data.record) {
            if (this.data.record.hasOwnProperty(dataKey)) {
              const userData = this.data.record[dataKey];
              this.data_users.push(userData);
              this.showDetails.push(false);
            }
          }
        }
        this.loading.dismiss();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.loading.dismiss();
      });
  }

  ToggleDetails(i: number) {
    this.showDetails[i] = !this.showDetails[i];
  }

  getHighlight(studBal: any, bal: any){
    return studBal == bal ? "green" : "";
  }

  protected readonly Input = Input;
}
