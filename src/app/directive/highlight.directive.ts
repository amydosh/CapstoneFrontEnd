import { Directive, Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private elementReference: ElementRef,
    private render: Renderer2
    ) {
      this.elementReference.nativeElement.style.backgroundColor = 'grey';
      this.elementReference.nativeElement.style.padding = '20px';
    
     }

}
