import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qam8Page } from './qam8.page';

const routes: Routes = [
  {
    path: '',
    component: Qam8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qam8PageRoutingModule {}
