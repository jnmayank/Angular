import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers : number[] = [];
  evenNumbers : number[] = [];

  onStartGame(counter : {count: number}) {
    if (counter.count%2 == 0) {
      console.log("even.."+counter.count);
      this.evenNumbers.push(counter.count);
    } else {
      console.log("odd.."+counter.count);
      this.oddNumbers.push(counter.count);
    }
  }
}
