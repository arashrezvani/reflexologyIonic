import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OminousdayPageRoutingModule } from './ominousday-routing.module';

import { OminousdayPage } from './ominousday.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    OminousdayPageRoutingModule
  ],
  declarations: [OminousdayPage]
})
export class OminousdayPageModule {}
