import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {Lab6PageModule} from "../lab6/lab6.module";
import {MyHeaderComponentModule} from "../my-header/my-header.component.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab1PageRoutingModule,
        Lab6PageModule,
        MyHeaderComponentModule,
    ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
