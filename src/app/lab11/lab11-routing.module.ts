import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab11Page } from './lab11.page';

const routes: Routes = [
  {
    path: '',
    component: Lab11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab11PageRoutingModule {}
