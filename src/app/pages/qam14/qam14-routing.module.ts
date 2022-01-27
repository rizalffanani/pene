import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qam14Page } from './qam14.page';

const routes: Routes = [
  {
    path: '',
    component: Qam14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qam14PageRoutingModule {}
