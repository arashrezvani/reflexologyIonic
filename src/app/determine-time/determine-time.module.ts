import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetermineTimePageRoutingModule } from './determine-time-routing.module';

import { DetermineTimePage } from './determine-time.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetermineTimePageRoutingModule,
    TranslateModule
  ],
  declarations: [DetermineTimePage]
})
export class DetermineTimePageModule {}
