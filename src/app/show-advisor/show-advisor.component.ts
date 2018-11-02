import { Component, OnInit } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { InsuranceAdvisor } from '../insurance-advisor';

@Component({
  selector: 'app-show-advisor',
  templateUrl: './show-advisor.component.html',
  styleUrls: ['./show-advisor.component.css']
})
export class ShowAdvisorComponent implements OnInit {

  advisorList: InsuranceAdvisor[];
  constructor(private service: InsuranceAPIService) { }

  ngOnInit() {
    this.service.findAllAdvisors().subscribe(data => this.advisorList = data,err => console.error());
    
  }

}
