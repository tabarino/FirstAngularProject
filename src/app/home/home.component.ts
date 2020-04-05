import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives = [
    { year: 2017, month: 11 },
    { year: 2019, month: 12 },
    { year: 2020, month: 4 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
