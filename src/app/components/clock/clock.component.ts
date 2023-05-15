import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  dateTime: Date;

  constructor() {
    this.dateTime = new Date();
  }

  ngOnInit() {
    this.startClock();
  }

  startClock() {
    setInterval(() => {
      this.dateTime = new Date();
      console.log("count");
    }, 1000);
  }
}

