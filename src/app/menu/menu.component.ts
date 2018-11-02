import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PageLink } from '../page-link';
import { ComponentCommunicationService } from '../component-communication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
  //encapsulation: ViewEncapsulation.Native
})
export class MenuComponent implements OnInit {

  @Input() linksfromParent: PageLink[];
  showLogin = true;
  showLogout = false;


  constructor(private service: ComponentCommunicationService) { }

  ngOnInit() {
    this.service.messaage.subscribe(status => {
      if (status == 'login')
      {
        this.showLogout = true;
        this.showLogin = false;
      }
      if (status == 'logout')
      {
        this.showLogout = false;
        this.showLogin = true;
      }
    })
  }

}
