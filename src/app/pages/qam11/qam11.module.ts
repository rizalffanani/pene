import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qam11PageRoutingModule } from './qam11-routing.module';

import { Qam11Page } from './qam11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Qam11PageRoutingModule
  ],
  declarations: [Qam11Page]
})
export class Qam11PageModule {}
