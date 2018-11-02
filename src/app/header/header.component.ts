import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHeading: string;
  logo: string;
  linkText = 'Login';
  links: PageLink[];

  constructor() { 
    this.links = [{linkText:'Home', linkRef: 'home', linkStyle: 'nav-link'},
    {linkText:'Product', linkRef: 'product', linkStyle: 'nav-link'},
    {linkText:'History', linkRef: 'history', linkStyle: 'nav-link'},
    {linkText:'Advisors', linkRef: 'advisors', linkStyle: 'nav-link'},
    {linkText:'Get Quote', linkRef: 'quote', linkStyle: 'nav-link'},
    {linkText:'Branches', linkRef: 'branches', linkStyle: 'nav-link'}];
    
    this.majHeading = 'My Insurance';
    this.logo = 'assets/images/logo.png';
  }

  ngOnInit() {
  }

}
