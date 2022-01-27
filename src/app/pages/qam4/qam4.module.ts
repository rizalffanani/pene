import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qam4PageRoutingModule } from './qam4-routing.module';

import { Qam4Page } from './qam4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Qam4PageRoutingModule
  ],
  declarations: [Qam4Page]
})
export class Qam4PageModule {}
