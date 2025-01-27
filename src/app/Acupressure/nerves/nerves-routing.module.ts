import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NervesPage } from './nerves.page';

const routes: Routes = [
  {
    path: '',
    component: NervesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NervesPageRoutingModule {}
