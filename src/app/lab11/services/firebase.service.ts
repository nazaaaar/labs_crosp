import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/compat/database";
import {Tovar} from "./Tovar";
import {TovarType} from "./TovarType";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  tovarListRef?: AngularFireList<any>;
  tovarTypeListRef?: AngularFireList<any>;
  bdRef?: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {
  }

  createTovar(tovar: Tovar){
    return this.tovarListRef?.push({
        id: tovar.id,
        description: tovar.description,
        tovarTypeId: tovar.tovarTypeId,
        price: tovar.price,
        name: tovar.name
      }
    )
  }

  createTovarType(tovarType: TovarType){
    return this.tovarTypeListRef?.push({
      id: tovarType.id,
      name: tovarType.name
    })
  }

  getRecord(id:string, bd: string){
    this.bdRef = this.db.object('/' + bd + id);
    return this.bdRef;
  }

  //op == true => tovar
  getRecordList(bd: string, op: boolean){
    if(op){
      this.tovarListRef = this.db.list("/" + bd)
      return this.tovarListRef;
    }
    else {
      this.tovarTypeListRef = this.db.list("/" + bd)
      return this.tovarTypeListRef;
    }
  }

  updateTovar(id: number, tovar: Tovar, bd: string){
    this.bdRef = this.db.object("/" + bd + "/" + id);
    return this.bdRef.update({
      id: tovar.id,
      description: tovar.description,
      tovarTypeId: tovar.tovarTypeId,
      price: tovar.price,
      name: tovar.name
    })
  }

  updateTovarType(id: number, tovarType: TovarType, bd: string){
    this.bdRef = this.db.object("/" + bd + "/" + id);
    return this.bdRef.update({
      id: tovarType.id,
      name: tovarType.name
    })
  }

  deleteRecord(id: string, bd: string){
    this.bdRef = this.db.object("/" + bd + "/" + id);
    this.bdRef.remove();
  }
}
