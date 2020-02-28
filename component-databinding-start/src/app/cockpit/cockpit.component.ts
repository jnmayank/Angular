import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // emitting the custom event
  @Output() serverCreated = new EventEmitter<{
    serverName: string, serverContent: string
  }>();

  // emitting the custom event with alias
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string, serverContent: string
  }>();;

  newServerName = '';
  newServerContent = '';

  @ViewChild('servercontentInput', {static: false}) servercontentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
        serverName: nameInput.value,
        serverContent: this.servercontentInput.nativeElement.value
     });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.servercontentInput.nativeElement.value
    });
  }

}
