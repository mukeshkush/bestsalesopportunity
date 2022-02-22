import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-opportunity',
  templateUrl: './add-opportunity.page.html',
  styleUrls: ['./add-opportunity.page.scss'],
})
export class AddOpportunityPage implements OnInit {
  segmentValue = '1';
  isParamsAvailable: boolean = false;

  opportunity: any = {
    opp_owner:'',
    opp_name:'',
    mob_num:'',
    email:'',
    prod_group_name:'',
    prospect_status:'',
    lead_source:'',
    status:'',
    note_type : '',
    note:'',
    description:'',
    leadAttachment:''
  }

  constructor(private router: Router,    private route: ActivatedRoute) { }

  ngOnInit() {
    this.isParamsAvailable = this.route.snapshot.paramMap.get('isEdit') === 'true' ? true : false;
    console.log('this.isParamsAvailable >>>>>>>>>>>', this.isParamsAvailable);
    if(this.isParamsAvailable){
      this.opportunity = {
        opp_owner:'Jessika',
        opp_name:'TEST Walkdown - BU000020',
        mob_num:'9999777700',
        email:'Customer email address not available',
        prod_group_name:'Group',
        prospect_status:'ExistingAccount',
        lead_source:'Service',
        status:'Unqualified',
        note_type : 'GENERAL',
        note:'',
        description:'A site walkdown was completed by service engineer Casey J Coppock on 28-Jan-2021. Walkdown BU000020 uncovered 1 tag(s) with YELLOW health status.\nPlease refer to the summary report attached to this lead for Tag, Serial Number, Model Number and additional details. Review the report, qualify the lead, and contact customer with a quote. View the Notes tab to the left to find the complete recommendation. If there is no actual business opportunity, please close the lead by going to Actions -> Retire and providing the appropriate retire reason.\nView the Notes tab to the left to find the complete recommendation, as well as a link to the MyAssets site for more details.',
        leadAttachment:'MKL_LEAD_CATEGORY'
      
      }
    }
    // this.reportId = this.route.snapshot.paramMap.get('id');
  }

  segmentChanged(event) {
    this.segmentValue = event.detail.value;
  }

  
}
