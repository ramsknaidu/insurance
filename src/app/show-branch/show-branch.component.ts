import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-show-branch',
  templateUrl: './show-branch.component.html',
  styleUrls: ['./show-branch.component.css']
})
export class ShowBranchComponent implements OnInit {

  @Input() cityName: string;
  @Output() branches: EventEmitter<string[]> = new EventEmitter<string[]>();
  
  constructor() { 
    console.log(this.cityName);
  }

  ngOnInit() {
    console.log(this.cityName);
  }

  sendBranches() {
    if (this.cityName == 'Hyd') {
      this.branches.emit(['Lingampally', 'Madhapur', 'Miyapur']);
    }
    else {
      this.branches.emit(['Pragathi Nagar', 'Sai Nagar', 'Sri Nagar']);
    }
  }

}
