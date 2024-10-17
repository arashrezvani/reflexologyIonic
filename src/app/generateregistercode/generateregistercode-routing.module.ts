import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateregistercodePage } from './generateregistercode.page';

const routes: Routes = [
  {
    path: '',
    component: GenerateregistercodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerateregistercodePageRoutingModule {}
