import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OminousdayPage } from './ominousday.page';

const routes: Routes = [
  {
    path: '',
    component: OminousdayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OminousdayPageRoutingModule {}
