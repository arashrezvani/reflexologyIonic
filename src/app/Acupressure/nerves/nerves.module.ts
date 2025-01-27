import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NervesPageRoutingModule } from './nerves-routing.module';

import { NervesPage } from './nerves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NervesPageRoutingModule
  ],
  declarations: [NervesPage]
})
export class NervesPageModule {}
