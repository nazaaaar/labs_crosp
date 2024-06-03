import {Component, OnDestroy, OnInit} from '@angular/core';
import {TovarTypeList} from "./services/TovarTypeList";
import {ConfigServiceLab11} from "./services/config.service";
import {Subscription} from "rxjs";
import {TovarList} from "./services/TovarList";
import {TovarType} from "./services/TovarType";
import {Tovar} from "./services/Tovar";
import {FirebaseService} from "./services/firebase.service";

@Component({
  selector: 'app-lab11',
  templateUrl: './lab11.page.html',
  styleUrls: ['./lab11.page.scss'],
})
export class Lab11Page implements OnInit, OnDestroy {
  tovarTypeList: TovarTypeList = new TovarTypeList();

  private configService = new ConfigServiceLab11();

  private subscription: Subscription[] = [];

  tovarList = new TovarList(this.configService);

  tovarType = new TovarType(0, "");

  count = 0;
  newTovarTypeName: string = "";

  bdTovar = "Tovar";
  bdTovarType = "TovarType";

  constructor(public fbService: FirebaseService) {}
  ngOnInit(): void {
    this.fetchTask(this.bdTovar,true)

    let taskRes = this.fbService.getRecordList(this.bdTovar,true);
    taskRes.snapshotChanges().subscribe();

    this.fetchTask(this.bdTovarType,false)

    let taskRes1 = this.fbService.getRecordList(this.bdTovarType,false);
    taskRes1.snapshotChanges().subscribe();

    const tovarTypeSub = this.configService.tovarType$.subscribe(
      ()=>{
        this.tovarType = this.configService.tovarType$.value;
      }
    )
    this.subscription.push(tovarTypeSub);
  }

  fetchTask(bd: any, op: any){
    this.fbService.getRecordList(bd,op).valueChanges().subscribe(res =>{
      if (op){
        this.tovarList.tovars=res;
      }
      else{
        this.tovarTypeList.tovars = res;
        this.tovarType = this.tovarTypeList.tovars[this.count];
        this.tovarList.search(this.tovarType.id);
      }
    })
  }

  nextTovarType(){
    if (++this.count >= this.tovarTypeList.tovars.length){
      this.count=0;
    }

    this.configService.setType(this.tovarTypeList.tovars[this.count])
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
    this.fbService.createTovar(newTovar);
    this.tovarList.add(newTovar);
    this.resetForm();
  }

  resetForm() {
    this.newTovarName = '';
    this.newTovarPrice = 0;
    this.newTovarDescription = '';
  }

  addTovarType(){
    const id = this.tovarTypeList.tovars.length;
    const newTovarType = new TovarType(id, this.newTovarTypeName);
    this.tovarTypeList.add(newTovarType);
    this.configService.setType(newTovarType);
    this.fbService.createTovarType(newTovarType);
    this.newTovarTypeName = '';
  }

  ngOnDestroy(){
    this.subscription.forEach(s => s.unsubscribe())
  }

}

