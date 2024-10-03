import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculationMoonPage } from './calculation-moon.page';

const routes: Routes = [
  {
    path: '',
    component: CalculationMoonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculationMoonPageRoutingModule {}
