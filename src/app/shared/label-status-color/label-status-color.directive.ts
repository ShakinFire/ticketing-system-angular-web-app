import { Directive, Input, ElementRef, Renderer2, AfterViewInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appLabelStatusColor]'
})
export class LabelStatusColorDirective implements AfterViewInit {
  @Input('appLabelStatusColor') status: string;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.status = this.status.replace(/[ -]+/g, '').toLowerCase();
    this.renderer.addClass(this.el.nativeElement, this.status);
  }

}
