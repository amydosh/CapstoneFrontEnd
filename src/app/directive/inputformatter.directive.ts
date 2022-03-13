import { Directive, HostListener, Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[inputformatter]'
})
export class InputformatterDirective {

  constructor(private elementReference: ElementRef,
    private render: Renderer2
    ) {
     }

     @HostListener('blur')
     onBlur(){
      //  console.log("onBlur is triggered");
       let value:string= this.elementReference.nativeElement.value;
       this.elementReference.nativeElement.value = value.toLowerCase();

     }

}
