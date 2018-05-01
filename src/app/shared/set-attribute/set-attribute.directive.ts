import { Directive, ElementRef, Renderer2, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appSetAttribute]'
})
export class SetAttributeDirective implements AfterViewInit{
  @Input('appSetAttribute') id: string;
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'id', this.id);
  }
}
