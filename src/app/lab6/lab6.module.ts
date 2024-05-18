import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab6PageRoutingModule } from './lab6-routing.module';

import { Lab6Page } from './lab6.page';
import {MyHeaderComponent} from "../my-header/my-header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab6PageRoutingModule
  ],
  exports: [
    MyHeaderComponent
  ],
  declarations: [Lab6Page, MyHeaderComponent]
})
export class Lab6PageModule {}
