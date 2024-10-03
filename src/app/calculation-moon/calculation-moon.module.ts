import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculationMoonPageRoutingModule } from './calculation-moon-routing.module';

import { CalculationMoonPage } from './calculation-moon.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculationMoonPageRoutingModule,
    TranslateModule
  ],
  declarations: [CalculationMoonPage]
})
export class CalculationMoonPageModule {}
