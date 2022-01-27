import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qam13Page } from './qam13.page';

const routes: Routes = [
  {
    path: '',
    component: Qam13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qam13PageRoutingModule {}
