import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qam11Page } from './qam11.page';

const routes: Routes = [
  {
    path: '',
    component: Qam11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qam11PageRoutingModule {}
