import { Component, OnInit, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() name: string;
  constructor() { 
    //alert('In Child Constructor Property: ' + this.name);
  }

  ngOnInit() {
    //alert('In Child ngOnInit Property: ' + this.name);
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change.name.previousValue);
    console.log(change.name.currentValue);
  }

}
