import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qam3Page } from './qam3.page';

const routes: Routes = [
  {
    path: '',
    component: Qam3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qam3PageRoutingModule {}
