import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qam10Page } from './qam10.page';

const routes: Routes = [
  {
    path: '',
    component: Qam10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qam10PageRoutingModule {}
