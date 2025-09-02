import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReflexPage } from './reflex.page';

const routes: Routes = [
  {
    path: '',
    component: ReflexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReflexPageRoutingModule {}
