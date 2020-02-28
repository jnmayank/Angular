import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html',
  styleUrls: ['./directive-component.component.css']
})
export class DirectiveComponentComponent implements OnInit {

  showSecret = false;
  noOfClick = [];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.showSecret = !this.showSecret;
    //this.noOfClick.push(this.noOfClick.length+1);
    this.noOfClick.push(new Date());
  }

  getColor() {
    if(this.noOfClick.length >= 5) 
      return 'blue'
    return 'transparent';
  }
}
