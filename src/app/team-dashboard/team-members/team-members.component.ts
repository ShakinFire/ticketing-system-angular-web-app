import { Component, OnInit, Input } from '@angular/core';
import { TeamQueue } from '../../models/teams/team-queue';
import { TeamViewService } from '../team-view/team-view.service';
import { FullNameUserInput } from '../../models/user/addMember';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {
  @Input() teamQueue: TeamQueue;
  allUsers: FullNameUserInput[];
  constructor(private teamViewService: TeamViewService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    if (!this.allUsers) {
      this.teamViewService.getAllTeamUsers(this.teamQueue.id).subscribe((res) => {
        this.allUsers = res;
      });
    }
  }

}
