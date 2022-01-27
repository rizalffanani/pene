import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qam10PageRoutingModule } from './qam10-routing.module';

import { Qam10Page } from './qam10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Qam10PageRoutingModule
  ],
  declarations: [Qam10Page]
})
export class Qam10PageModule {}
