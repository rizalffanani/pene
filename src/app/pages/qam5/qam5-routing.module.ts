import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qam5Page } from './qam5.page';

const routes: Routes = [
  {
    path: '',
    component: Qam5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qam5PageRoutingModule {}
