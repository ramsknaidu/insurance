import { Injectable, ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core/';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  setViewRef(viewRef){
    this.viewRef = viewRef;
  }

  addComponent(compToAdd: any): any {
    const factory = this.resolver.resolveComponentFactory(compToAdd);
    const compRef = factory.create(this.viewRef.parentInjector);
    this.viewRef.insert(compRef.hostView);
    return compRef;
  }

  remove(){
    this.viewRef.detach();
  }
}
