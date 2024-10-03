import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoDarmanAbjadPage } from './info-darman-abjad.page';

const routes: Routes = [
  {
    path: '',
    component: InfoDarmanAbjadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoDarmanAbjadPageRoutingModule {}
