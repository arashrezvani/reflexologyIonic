import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReflexologymainPage } from './reflexologymain.page';

const routes: Routes = [
  {
    path: '',
    component: ReflexologymainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReflexologymainPageRoutingModule {}
