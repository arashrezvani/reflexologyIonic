import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerscriptiongeneralPageRoutingModule } from './perscriptiongeneral-routing.module';

import { PerscriptiongeneralPage } from './perscriptiongeneral.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PerscriptiongeneralPageRoutingModule
  ],
  declarations: [PerscriptiongeneralPage]
})
export class PerscriptiongeneralPageModule {}
