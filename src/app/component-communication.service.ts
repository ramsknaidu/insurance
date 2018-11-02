import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {
messaage: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  changeMessage(latestMessage){
    this.messaage.next(latestMessage);
  }
}
