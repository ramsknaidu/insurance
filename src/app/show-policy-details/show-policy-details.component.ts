import { Component, OnInit, ViewChild } from '@angular/core';
import { PolicyDetails } from '../policy-details';
import { InsuranceAPIService } from './../insurance-api.service';

@Component({
  selector: 'app-show-policy-details',
  templateUrl: './show-policy-details.component.html',
  styleUrls: ['./show-policy-details.component.css']
})
export class ShowPolicyDetailsComponent implements OnInit {
  
  @ViewChild('f') form: any;

  policyList: PolicyDetails[] = [];
  policyData: PolicyDetails = {
    id:0,
    policyHolderName:'',
    policyAmount:0,
    maturityDate:new Date()
  };
  srchName = '';
  buttonText = 'Add';
  idxPos: number;
  toggleForm = false;
  showUp = true;
  showDown = false;
  page: number;

  constructor(private service: InsuranceAPIService) { }

  ngOnInit() {
    this.service.findAllPolicy().subscribe(data => this.policyList = data);
  }

  submit(){
    if (this.buttonText == 'Add'){
      this.service.addPolicy(this.policyData).subscribe(resp => {
        this.policyList.push(resp);
        this.form.reset();
      });
    }
    else {
      this.service.updatePolicy(this.policyData).subscribe(resp => {
        this.policyList[this.idxPos] = resp;
        this.buttonText = 'Add';
        this.form.reset();
      });
    }
    
    console.log(this.policyData);
  }

  update(policy) {
    this.idxPos = this.policyList.indexOf(policy);
    this.buttonText = 'Update';
    if(!this.toggleForm){
      this.showForm();
    }

    this.policyData = policy;

    this.service.removePolicy(policy).subscribe(resp => {
      this.policyList.splice(this.idxPos,1);
    });

    console.log('update called');
  }

  showForm(){
    this.toggleForm  = !this.toggleForm ;
    this.showUp = !this.showUp;
    this.showDown = !this.showDown;
  }

  remove(policy) {
    const idxPos  = this.policyList.indexOf(policy);
    this.service.removePolicy(policy).subscribe(resp => {
      this.policyList.splice(idxPos,1);
    });
    console.log('remove called');
  }

}
