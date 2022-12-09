import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit{
  hinvelement:string="red";

  constructor(private element:ElementRef,private render:Renderer2) { }

  ngOnInit(){
    this.render.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      "steelblue"
    )
  }


  @HostListener('mouseenter') mouseenter(){
    this.render.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      this.hinvelement
    );
  }

  @HostListener('mouseleave') mouseleave(){
    this.render.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      "white"
    );
  }

}
