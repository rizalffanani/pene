import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qam14PageRoutingModule } from './qam14-routing.module';

import { Qam14Page } from './qam14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Qam14PageRoutingModule
  ],
  declarations: [Qam14Page]
})
export class Qam14PageModule {}
