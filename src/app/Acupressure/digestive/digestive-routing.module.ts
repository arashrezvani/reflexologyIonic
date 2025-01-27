import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigestivePage } from './digestive.page';

const routes: Routes = [
  {
    path: '',
    component: DigestivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigestivePageRoutingModule {}
