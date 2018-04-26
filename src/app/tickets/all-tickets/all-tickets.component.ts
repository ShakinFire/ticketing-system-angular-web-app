import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {
  tabId: number;
  constructor() { }

  ngOnInit() {
    this.tabId = 0;
  }


  changeActive(id: number): void {
    this.tabId = id;
  }
}
