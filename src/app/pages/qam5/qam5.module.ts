import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qam5PageRoutingModule } from './qam5-routing.module';

import { Qam5Page } from './qam5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Qam5PageRoutingModule
  ],
  declarations: [Qam5Page]
})
export class Qam5PageModule {}
