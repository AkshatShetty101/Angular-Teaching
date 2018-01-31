 import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  constructor(private renderer:Renderer2, private elementref: ElementRef) { }
  ngOnInit(){
    this.renderer.setStyle(this.elementref.nativeElement,'background-color','#bbc2b5de');
  }
  @HostListener('mouseenter') mouseover(eventdata: Event){
    this.renderer.setStyle(this.elementref.nativeElement,'background-color','#ffa300');  
  }
  @HostListener('mouseleave') mouseleave(eventdata: Event){
    this.renderer.setStyle(this.elementref.nativeElement,'background-color','#bbc2b5de');  
  }

}
