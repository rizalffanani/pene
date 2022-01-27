import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qam4Page } from './qam4.page';

const routes: Routes = [
  {
    path: '',
    component: Qam4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qam4PageRoutingModule {}
