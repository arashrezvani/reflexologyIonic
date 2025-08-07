import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MentionPageRoutingModule } from './mention-routing.module';

import { MentionPage } from './mention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MentionPageRoutingModule
  ],
  declarations: [MentionPage]
})
export class MentionPageModule {}
