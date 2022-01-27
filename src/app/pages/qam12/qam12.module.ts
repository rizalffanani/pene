import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qam12PageRoutingModule } from './qam12-routing.module';

import { Qam12Page } from './qam12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Qam12PageRoutingModule
  ],
  declarations: [Qam12Page]
})
export class Qam12PageModule {}
