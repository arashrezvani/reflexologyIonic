import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListUsersPageRoutingModule } from './list-users-routing.module';

import { ListUsersPage } from './list-users.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ListUsersPageRoutingModule
  ],
  declarations: [ListUsersPage]
})
export class ListUsersPageModule {}
