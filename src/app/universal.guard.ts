import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogoutComponent } from './logout/logout.component';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate, CanDeactivate<LogoutComponent> {

  constructor(private router: Router){}

  canDeactivate(component: LogoutComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): boolean {
    const url = currentRoute.url;
    const prevURL = currentState.url;
    console.log(prevURL);
    const result = window.confirm('Are you sure');
    if (!result){
      this.router.navigate(['quote']);
    }
    return result;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let allow = false;
      if (sessionStorage.getItem('login') == 'true') {
        allow = true;
      }
      else {
        this.router.navigate(['login', 'Logged User only can access this page.']);
      }
    return allow;
  }
}
