import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab4PageRoutingModule } from './lab4-routing.module';

import { Lab4Page } from './lab4.page';
import {Lab6PageModule} from "../lab6/lab6.module";
import {MyHeaderComponentModule} from "../my-header/my-header.component.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Lab4PageRoutingModule,
        Lab6PageModule,
        MyHeaderComponentModule,
    ],
  declarations: [Lab4Page]
})
export class Lab4PageModule {}
