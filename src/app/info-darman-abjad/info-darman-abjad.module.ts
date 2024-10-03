import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoDarmanAbjadPageRoutingModule } from './info-darman-abjad-routing.module';

import { InfoDarmanAbjadPage } from './info-darman-abjad.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoDarmanAbjadPageRoutingModule,
    TranslateModule
  ],
  declarations: [InfoDarmanAbjadPage]
})
export class InfoDarmanAbjadPageModule {}
