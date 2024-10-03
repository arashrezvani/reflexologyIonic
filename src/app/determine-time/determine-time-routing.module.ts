import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetermineTimePage } from './determine-time.page';

const routes: Routes = [
  {
    path: '',
    component: DetermineTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetermineTimePageRoutingModule {}
