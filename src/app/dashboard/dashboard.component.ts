import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hall-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'SUST Hall';

  constructor() { }

  ngOnInit(): void {
  }

}
