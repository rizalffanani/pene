import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qam9Page } from './qam9.page';

const routes: Routes = [
  {
    path: '',
    component: Qam9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qam9PageRoutingModule {}
