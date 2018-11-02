import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {

  isDisabled = true;
  age = 18;
  suggestedpolicy = 'Life Insurance';

  constructor() { }

  ngOnInit() {}
  
  showPolicy(){
    if(this.age > 30){
      this.suggestedpolicy = 'Jeevan Anand';
    }
    else{
      this.suggestedpolicy = 'Jeevan Life';
    }
    console.log('policy details');
  }

  changeStatus(){
    this.isDisabled = false;
  }

}
