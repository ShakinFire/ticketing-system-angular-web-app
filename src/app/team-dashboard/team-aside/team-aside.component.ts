import { Component, OnInit, Input } from '@angular/core';
import { TeamQueue } from '../../models/teams/team-queue';

@Component({
  selector: 'app-team-aside',
  templateUrl: './team-aside.component.html',
  styleUrls: ['./team-aside.component.css']
})
export class TeamAsideComponent implements OnInit {
  @Input() teamQueue: TeamQueue;
  constructor() { }

  ngOnInit() {
  }

}
