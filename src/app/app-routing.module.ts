import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { ShowPolicyDetailsComponent } from './show-policy-details/show-policy-details.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { ShowAdvisorComponent } from './show-advisor/show-advisor.component';
import { HomeComponent } from './home/home.component';
import { UniversalGuard } from './universal.guard';
import { ShowHealthPolicyComponent } from './show-health-policy/show-health-policy.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'login/:msg', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'product', component: ContentComponent},
  {path:'history', component: DetailsComponent, canActivate: [UniversalGuard], 
  children: [
    {path:'health', component: ShowHealthPolicyComponent, outlet:'health'},
    {path:'life', component: ShowPolicyDetailsComponent, outlet: 'life'}]
  },
  {path:'advisors', component: ShowAdvisorComponent},
  {path:'quote', component: ShowQuoteComponent},
  {path:'branches', component: SearchBranchComponent},
  {path:'logout', component: LogoutComponent, canDeactivate: [UniversalGuard]},
  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
