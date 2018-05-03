import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-settings',
  templateUrl: './team-settings.component.html',
  styleUrls: ['./team-settings.component.css']
})
export class TeamSettingsComponent implements OnInit {
  menuTab: number;
  constructor() { }

  ngOnInit() {
    this.menuTab = 0;
  }

  changeActiveMenu(id: number): void {
    this.menuTab = id;

    if (id === 0) {
      // Add member
    } else if (id === 1) {
      // Options
    } else {
      // Remove user ONLY TL
    }
  }

}
