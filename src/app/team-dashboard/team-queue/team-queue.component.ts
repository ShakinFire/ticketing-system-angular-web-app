import { Component, OnInit, Input } from '@angular/core';
import { TeamQueue } from '../../models/teams/team-queue';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-queue',
  templateUrl: './team-queue.component.html',
  styleUrls: ['./team-queue.component.css']
})
export class TeamQueueComponent implements OnInit {
  @Input() teamQueue: TeamQueue;
  constructor(private router: Router) { }
  
  ngOnInit() {
  }

  goToTicket(ticketId: number): void {
    const route: string = '/ticket-view/' + ticketId;
    this.router.navigateByUrl(route);
  }

}
