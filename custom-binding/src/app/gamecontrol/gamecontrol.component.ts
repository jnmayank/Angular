import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output('gameStarted') GameisRunning = new EventEmitter<{count: number}>();
  myInterval;
  index = 1;

  constructor() {

   }

  ngOnInit() {
  }

  onStartGame() {
    this.myInterval = setInterval(() => {
      this.GameisRunning.emit({
        count: this.index
      });
      this.index++;
    }, 1000)
  }

  onEndGame() {
    clearInterval(this.myInterval);
  }

}
