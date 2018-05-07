import { Component, OnInit, Input } from '@angular/core';
import { TeamQueue } from '../../models/teams/team-queue';

@Component({
  selector: 'app-team-queue',
  templateUrl: './team-queue.component.html',
  styleUrls: ['./team-queue.component.css']
})
export class TeamQueueComponent implements OnInit {
  @Input() teamQueue: TeamQueue;
  constructor() { }
  
  ngOnInit() {
  }

}
