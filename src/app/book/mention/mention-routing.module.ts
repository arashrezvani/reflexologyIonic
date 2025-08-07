import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentionPage } from './mention.page';

const routes: Routes = [
  {
    path: '',
    component: MentionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentionPageRoutingModule {}
