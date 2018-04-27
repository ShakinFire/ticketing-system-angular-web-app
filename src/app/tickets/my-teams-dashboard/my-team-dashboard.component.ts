import { AuthService } from './../../core/auth/auth.service';
import { myTeamsDash } from './../../models/teams/my-teams';
import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-team-dashboard',
  templateUrl: './my-team-dashboard.component.html',
  styleUrls: ['./my-team-dashboard.component.css']
})
export class MyTeamDashboardComponent implements OnInit {
  @Input() teams: myTeamsDash[];
  teamId: string;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  getTeam(id: number) {
    console.log(id);
  }
}
