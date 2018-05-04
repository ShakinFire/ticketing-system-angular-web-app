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
      console.log(res);
    });
  }

  membersTab(): void {

  }

  settingsTab(): void {

  }

  changeActive(id: number): void {
    this.tabId = id;

    if (id === 0) {
      this.teamQueueTab(this.id);
    } else if (id === 1) {
      // Members    
    } else {
      // Settings
    }
  }
}
