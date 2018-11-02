import { Directive, Input, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddElement]'
})
export class AddElementDirective implements OnInit  {

  @Input() elementToAdd: string;
  @Input() elementText: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnInit(){
  }

  @HostListener('click') addElement(){
    const newElement = this.render.createElement(this.elementToAdd);
    const text = this.render.createText(this.elementText);

    this.render.appendChild(newElement, text);

    const pos = this.render.selectRootElement('article');
    
    this.render.appendChild(pos, newElement);

    console.log(newElement);
  }

}
