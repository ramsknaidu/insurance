import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: ComponentCommunicationService, private router: Router) { }

  ngOnInit() {
    this.validate();
  }

  validate(){
    this.service.changeMessage('logout');
    sessionStorage.removeItem('login');
    this.router.navigate(['login']);
  }

}
