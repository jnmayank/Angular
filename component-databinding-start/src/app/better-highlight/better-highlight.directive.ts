import { Directive, 
  Renderer2, 
  OnInit, 
  ElementRef, 
  HostListener, 
  HostBinding, 
  Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor : string = 'transparent';
  @Input('appBetterHighlight') highlightColor : string = 'blue'; // alias to a highlightColor property.

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
    //this.elRef.nativeElement.style.backgroundColor='blue';

    // renderer is better approach for DOM manipulations; 
    //especially with the ServiceWorker where you don't have the access to DOM

    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor','blue');
    
    this.backgroundColor = this.defaultColor;
  } 
    @HostListener('mouseenter')
    mouseOver(eventData: Event) {
      //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor','blue');
      this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave')
    mouseLeave(eventData: Event) {
      //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor','transparent');
      this.backgroundColor = this.defaultColor;
    }
}
