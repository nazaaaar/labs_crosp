import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab11PageRoutingModule } from './lab11-routing.module';

import { Lab11Page } from './lab11.page';
import {MyHeaderComponentModule} from "../my-header/my-header.component.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Lab11PageRoutingModule,
        MyHeaderComponentModule
    ],
  declarations: [Lab11Page]
})
export class Lab11PageModule {}
