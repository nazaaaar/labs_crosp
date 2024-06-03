import {Component, OnDestroy, OnInit} from '@angular/core';
import { TovarList } from './services/TovarList';
import {TovarTypeList} from "./services/TovarTypeList";
import {ConfigService} from "./services/config.service";
import {Tovar} from "./services/Tovar";
import {Subscription} from "rxjs";
import {TovarType} from "./services/TovarType";
@Component({
  selector: 'app-lab10',
  templateUrl: './lab10.page.html',
  styleUrls: ['./lab10.page.scss'],
})
export class Lab10Page implements OnInit, OnDestroy {
  tovarTypeList: TovarTypeList = new TovarTypeList();

  private configService = new ConfigService();

  private subscription: Subscription[] = [];

  tovarList = new TovarList(this.configService);

  tovarType = new TovarType(0, "");

  count = 0;
  newTovarTypeName: string = "";

  constructor() {}
  ngOnInit(): void {
    const tovarTypeSub = this.configService.tovarType$.subscribe(
      ()=>{
        this.tovarType = this.configService.tovarType$.value;
      }
      )
    this.subscription.push(tovarTypeSub);
  }

  nextTovarType(){
    if (++this.count >= this.tovarTypeList.tovars.size){
      this.count=0;
    }

    this.configService.setType(this.tovarTypeList.tovars.get(this.count))
  }

  newTovarName: string = '';
  newTovarPrice: number = 0;
  newTovarDescription: string = '';

  addTovar(){
    const id = this.tovarList.tovars.length;

    const newTovar = new Tovar(
      id,
      this.newTovarName,
      this.configService.tovarType$.value.id,
      this.newTovarPrice,
      this.newTovarDescription
    );

    this.tovarList.add(newTovar);
    this.resetForm();
  }

  resetForm() {
    this.newTovarName = '';
    this.newTovarPrice = 0;
    this.newTovarDescription = '';
  }

  addTovarType(){
    const id = this.tovarTypeList.tovars.size;
    const newTovarType = new TovarType(id, this.newTovarTypeName);
    this.tovarTypeList.add(newTovarType);
    this.configService.setType(newTovarType);
    this.newTovarTypeName = '';
  }

  ngOnDestroy(){
    this.subscription.forEach(s => s.unsubscribe())
  }

}
