import { TeamQueue } from './../../models/teams/team-queue';
import { Component, OnInit } from '@angular/core';
import { AssigneeTicket } from '../../models/tickets/assigned-ticket';
import { ActivatedRoute } from '@angular/router';
import { TeamViewService } from './team-view.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {
  tabId: number;
  id: number;
  teamQueue: TeamQueue;
  sub: any;
  constructor(private route: ActivatedRoute, private teamViewService: TeamViewService) { }

  ngOnInit() {
    this.tabId = 0;
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.teamQueueTab(this.id);
    });
  }

  teamQueueTab(id: number): void {
    this.teamViewService.getTeamAndTickets(id).subscribe((res) => {
      this.teamQueue = res;
      this.teamViewService.setTeamLead(this.teamQueue.teamLeadUser.id);
    });
  }

  changeActive(id: number): void {
    this.tabId = id;

    if (id === 0) {
      this.teamQueueTab(this.id);
    }
  }
}
