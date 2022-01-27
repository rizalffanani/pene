import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qam12Page } from './qam12.page';

const routes: Routes = [
  {
    path: '',
    component: Qam12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qam12PageRoutingModule {}
