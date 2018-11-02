import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  public el: ElementRef;
  constructor(el: ElementRef, private render: Renderer2) { 
    this.el = el;
  }

  @HostListener('mouseover') over(){
    this.render.addClass(this.el.nativeElement, 'rotate');
    this.render.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
  }


  @HostListener('mouseout') out(){
    this.render.removeClass(this.el.nativeElement, 'rotate');
    this.render.setStyle(this.el.nativeElement, 'text-decoration', 'none');
  }
}
