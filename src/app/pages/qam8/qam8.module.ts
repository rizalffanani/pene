import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qam8PageRoutingModule } from './qam8-routing.module';

import { Qam8Page } from './qam8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Qam8PageRoutingModule
  ],
  declarations: [Qam8Page]
})
export class Qam8PageModule {}
