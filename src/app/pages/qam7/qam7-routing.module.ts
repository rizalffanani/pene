import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qam7Page } from './qam7.page';

const routes: Routes = [
  {
    path: '',
    component: Qam7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qam7PageRoutingModule {}
