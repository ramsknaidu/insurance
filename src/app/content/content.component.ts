import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { TestimonyComponent } from '../testimony/testimony.component';
import { Policy } from '../policy';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
@ViewChildren('section') sectionList: QueryList<any>;
@ViewChild(TestimonyComponent) compRef: TestimonyComponent;

  feedback1: string;
  feedback2: string;
  popularPolicyList: Policy[];
  constructor(private ref: ChangeDetectorRef) { 
    this.popularPolicyList = [
      {policyName: 'Jeevan Anand', description: 'Jeevan Anand Policy'},
      {policyName: 'Jeevan Life', description: 'Jeevan Life Policy'},
      {policyName: 'Jeevan Raksha', description: 'Jeevan Raksha Policy'}];
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void{-
    this.ref.detectChanges();
    console.log(this.feedback1);
    console.log(this.sectionList);

    //this.sectionList.forEach(eachComponent => )
  }

}
