import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelationshipPeoplePage } from './relationship-people.page';

const routes: Routes = [
  {
    path: '',
    component: RelationshipPeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelationshipPeoplePageRoutingModule {}
