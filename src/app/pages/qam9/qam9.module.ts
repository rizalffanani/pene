import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qam9PageRoutingModule } from './qam9-routing.module';

import { Qam9Page } from './qam9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Qam9PageRoutingModule
  ],
  declarations: [Qam9Page]
})
export class Qam9PageModule {}
