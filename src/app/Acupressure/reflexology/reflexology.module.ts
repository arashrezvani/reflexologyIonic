import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReflexologyPageRoutingModule } from './reflexology-routing.module';

import { ReflexologyPage } from './reflexology.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReflexologyPageRoutingModule
  ],
  declarations: [ReflexologyPage]
})
export class ReflexologyPageModule {}
