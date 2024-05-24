import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab8PageRoutingModule } from './lab8-routing.module';

import { Lab8Page } from './lab8.page';
import {MyHeaderComponentModule} from "../my-header/my-header.component.module";
import {Lab8FormComponent} from "./lab8-form/lab8-form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab8PageRoutingModule,
    MyHeaderComponentModule,
    ReactiveFormsModule
  ],
  declarations: [Lab8Page, Lab8FormComponent]
})
export class Lab8PageModule {}
