import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOpportunityPage } from './add-opportunity.page';

const routes: Routes = [
  {
    path: '',
    component: AddOpportunityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddOpportunityPageRoutingModule {}
