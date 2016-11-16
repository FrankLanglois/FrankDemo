/**
 * Created by flangloi on 10/19/2016.
 */
import { Directive, ElementRef, Renderer,HostListener, Input } from '@angular/core';
// Directive provides the functionality of the @Directive decorator.
// ElementRef injects into the directive's constructor so the code can access the DOM element.
// Renderer allows the code to change the DOM element's style.
// HostListener decorator refers to the DOM element that hosts an attribute directive

@Directive({ selector: '[backgroundOnMouse]' })
export class BackgroundOnMouseDirective {
  private _defaultColor = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  @Input('backgroundOnMouse') bgColor: string;
  // This below works too but is less comprehensible code wise.
  //@Input() backgroundOnMouse: string;

  @Input() set defaultColor(colorName: string){
    this._defaultColor = colorName || this._defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.bgColor || this._defaultColor);
    // This works below too but is less comprehensible code wise.
    //this.highlight(this.backgroundOnMouse || this._defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  highlight(color:string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
