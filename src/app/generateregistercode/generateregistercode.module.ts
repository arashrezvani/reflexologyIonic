import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerateregistercodePageRoutingModule } from './generateregistercode-routing.module';

import { GenerateregistercodePage } from './generateregistercode.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GenerateregistercodePageRoutingModule
  ],
  declarations: [GenerateregistercodePage]
})
export class GenerateregistercodePageModule {}
