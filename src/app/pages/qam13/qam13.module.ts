import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qam13PageRoutingModule } from './qam13-routing.module';

import { Qam13Page } from './qam13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Qam13PageRoutingModule
  ],
  declarations: [Qam13Page]
})
export class Qam13PageModule {}
