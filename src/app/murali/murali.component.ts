import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-murali',
  templateUrl: './murali.component.html',
  styleUrls: ['./murali.component.css']
})
export class MuraliComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add($event){
    console.log("Button clicked new .",$event);
  }

}
