import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrescriptionultraPageRoutingModule } from './prescriptionultra-routing.module';

import { PrescriptionultraPage } from './prescriptionultra.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PrescriptionultraPageRoutingModule
  ],
  declarations: [PrescriptionultraPage]
})
export class PrescriptionultraPageModule {}
