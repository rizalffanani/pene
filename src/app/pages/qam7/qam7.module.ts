import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qam7PageRoutingModule } from './qam7-routing.module';

import { Qam7Page } from './qam7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Qam7PageRoutingModule
  ],
  declarations: [Qam7Page]
})
export class Qam7PageModule {}
