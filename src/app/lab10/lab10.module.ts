import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab10PageRoutingModule } from './lab10-routing.module';

import { Lab10Page } from './lab10.page';
import {MyHeaderComponentModule} from "../my-header/my-header.component.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab10PageRoutingModule,
    MyHeaderComponentModule
  ],
  declarations: [Lab10Page]
})
export class Lab10PageModule {}
