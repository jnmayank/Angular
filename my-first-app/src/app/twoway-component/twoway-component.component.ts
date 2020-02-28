import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-component',
  templateUrl: './twoway-component.component.html',
  styleUrls: ['./twoway-component.component.css']
})
export class TwowayComponentComponent implements OnInit {

  userName: String = 'default';

  constructor() { }

  ngOnInit() {
  }

  isbuttonEnabled() {
    if(this.userName.length >0)
      return true;
    return false;
  }

  resetUserName() {
    this.userName = "";
  }

}
