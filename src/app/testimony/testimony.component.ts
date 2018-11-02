import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRetailCustomerFeedBack(): string{
    return 'Claim Processing';
  }

  getCorpCustomerFeedBack(): string{
    return 'Door Step Services';
  }
  

}
