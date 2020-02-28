import { Component, OnInit, Input, OnChanges, SimpleChanges, 
  DoCheck, AfterContentInit, OnDestroy, ViewChild, 
  ElementRef, AfterViewInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, 
AfterContentInit, AfterViewInit, DoCheck, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};

  @Input() name: string;

  @ViewChild('heading', {static: false}) heading: ElementRef;

  @ContentChild('contentParagraph', {static: true}) contentParagraph: ElementRef;

  constructor() {
    console.log("constrctor called");
   }

   ngOnChanges(changes : SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
   }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log(this.contentParagraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck!!");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit!!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log(this.heading.nativeElement.textContent);
    console.log(this.contentParagraph.nativeElement.textContent);
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
