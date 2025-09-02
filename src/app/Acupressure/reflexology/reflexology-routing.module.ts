import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReflexologyPage } from './reflexology.page';

const routes: Routes = [
  {
    path: '',
    component: ReflexologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReflexologyPageRoutingModule {}
