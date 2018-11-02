import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, AfterViewInit {

  user = '';
  constructor() { 
    //alert('Inside Life Cycle Constructor');
  }

  ngOnInit() {
    //alert('Inside Life Cycle ngOnInit');
  }

  ngAfterViewInit() {
    console.log('Inside ngAfterViewInit');
  }

}
