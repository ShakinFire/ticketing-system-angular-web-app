import { AuthService } from './../../core/auth/auth.service';
import { myTeamsDash } from './../../models/teams/my-teams';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MyTeamsDashboardService } from './my-teams-dashboard.service';

@Component({
  selector: 'app-my-team-dashboard',
  templateUrl: './my-team-dashboard.component.html',
  styleUrls: ['./my-team-dashboard.component.css']
})
export class MyTeamDashboardComponent implements OnInit {
  @Input() teams: myTeamsDash[];
  teamId: string;
  constructor(private auth: AuthService,private myTeamService: MyTeamsDashboardService) { }

  ngOnInit() {
  }

  getTeam(id: number) {
    this.myTeamService.goToTeam(id);
  }
}
