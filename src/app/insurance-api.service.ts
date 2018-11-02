import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from './insurance-advisor';
import { PolicyDetails } from './policy-details';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {
baseURL = 'http://localhost:3000/';
adviseURL = `${this.baseURL}advisors`;
lifeInsuranceURL = `${this.baseURL}lifeInsurance`;

header = new HttpHeaders().set('content-type', 'application/json');

constructor(private http: HttpClient) { }

  findAllAdvisors(): Observable<InsuranceAdvisor[]>{
    return this.http.get<InsuranceAdvisor[]>(this.adviseURL);
  }

  findAllAdvisorsAsPromise(): Promise<InsuranceAdvisor[]> {
    return this.http.get<InsuranceAdvisor[]>(this.adviseURL).toPromise();

  }

  findAllPolicy(): Observable<PolicyDetails[]>{
    return this.http.get<PolicyDetails[]>(this.lifeInsuranceURL);
  }

  addPolicy(policy: PolicyDetails): Observable<PolicyDetails>{
    return this.http.post<PolicyDetails>(this.lifeInsuranceURL,policy,{headers: this.header});
  }

  removePolicy(policy: PolicyDetails): Observable<PolicyDetails>{
    const deleteURL = `${this.lifeInsuranceURL}/${policy.id}`;
    return this.http.delete<PolicyDetails>(deleteURL,{headers: this.header});
  }

  updatePolicy(policy: PolicyDetails): Observable<PolicyDetails>{
    const updateURL = `${this.lifeInsuranceURL}/${policy.id}`;
    return this.http.put<PolicyDetails>(updateURL, policy, {headers: this.header});
  }
}
