import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOpportunityPageRoutingModule } from './add-opportunity-routing.module';

import { AddOpportunityPage } from './add-opportunity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOpportunityPageRoutingModule
  ],
  declarations: [AddOpportunityPage]
})
export class AddOpportunityPageModule {}
