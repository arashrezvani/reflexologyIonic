import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbjapersonPage } from './abjaperson.page';

const routes: Routes = [
  {
    path: '',
    component: AbjapersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbjapersonPageRoutingModule {}
