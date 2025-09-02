import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReflexologymainPageRoutingModule } from './reflexologymain-routing.module';

import { ReflexologymainPage } from './reflexologymain.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReflexologymainPageRoutingModule,
    TranslateModule
  ],
  declarations: [ReflexologymainPage]
})
export class ReflexologymainPageModule {}
