import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab3PageRoutingModule } from './lab3-routing.module';

import { Lab3Page } from './lab3.page';
import {Lab6PageModule} from "../lab6/lab6.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Lab3PageRoutingModule,
        Lab6PageModule
    ],
  declarations: [Lab3Page]
})
export class Lab3PageModule {}
