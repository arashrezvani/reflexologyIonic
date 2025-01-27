import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditUsersPageRoutingModule } from './edit-users-routing.module';

import { EditUsersPage } from './edit-users.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    EditUsersPageRoutingModule
  ],
  declarations: [EditUsersPage]
})
export class EditUsersPageModule {}
