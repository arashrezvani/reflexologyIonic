import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigestivePageRoutingModule } from './digestive-routing.module';

import { DigestivePage } from './digestive.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DigestivePageRoutingModule
  ],
  declarations: [DigestivePage]
})
export class DigestivePageModule {}
