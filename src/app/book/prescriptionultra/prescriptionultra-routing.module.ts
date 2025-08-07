import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrescriptionultraPage } from './prescriptionultra.page';

const routes: Routes = [
  {
    path: '',
    component: PrescriptionultraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrescriptionultraPageRoutingModule {}
