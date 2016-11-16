/**
 * Created by flangloi on 10/19/2016.
 */
import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';
// Directive provides the functionality of the @Directive decorator.
// ElementRef injects into the directive's constructor so the code can access the DOM element.
// Input allows data to flow from the binding expression into the directive.
// Renderer allows the code to change the DOM element's style.

@Directive({ selector: '[demoBackground]' })
export class BackgroundDirective implements OnInit{

  @Input() bgColor;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.bgColor);
  }


}
