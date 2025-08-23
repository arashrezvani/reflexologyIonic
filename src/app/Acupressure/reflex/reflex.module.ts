import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReflexPageRoutingModule } from './reflex-routing.module';

import { ReflexPage } from './reflex.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReflexPageRoutingModule
  ],
  declarations: [ReflexPage]
})
export class ReflexPageModule {}
