import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbjapersonPageRoutingModule } from './abjaperson-routing.module';

import { AbjapersonPage } from './abjaperson.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AbjapersonPageRoutingModule
  ],
  declarations: [AbjapersonPage]
})
export class AbjapersonPageModule {}
