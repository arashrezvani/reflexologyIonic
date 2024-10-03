import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelationshipPeoplePageRoutingModule } from './relationship-people-routing.module';

import { RelationshipPeoplePage } from './relationship-people.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelationshipPeoplePageRoutingModule,
    TranslateModule
  ],
  declarations: [RelationshipPeoplePage]
})
export class RelationshipPeoplePageModule {}
