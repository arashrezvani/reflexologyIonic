import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerscriptiongeneralPage } from './perscriptiongeneral.page';

const routes: Routes = [
  {
    path: '',
    component: PerscriptiongeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerscriptiongeneralPageRoutingModule {}
