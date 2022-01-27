import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qam3PageRoutingModule } from './qam3-routing.module';

import { Qam3Page } from './qam3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Qam3PageRoutingModule
  ],
  declarations: [Qam3Page]
})
export class Qam3PageModule {}
