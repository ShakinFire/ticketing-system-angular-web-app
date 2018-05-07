import { Component, OnInit, Input } from '@angular/core';
import { TeamViewService } from '../team-view/team-view.service';
import { FullNameUserInput } from '../../models/user/addMember';
import { AssigneeTicketUsers } from '../../models/tickets/assigned-ticket-users';
import { TokenUser } from '../../models/user/token-user';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-team-settings',
  templateUrl: './team-settings.component.html',
  styleUrls: ['./team-settings.component.css']
})
export class TeamSettingsComponent implements OnInit {
  @Input() teamId: number;
  menuTab: number;
  loggedUser: TokenUser;
  membersToAdd: FullNameUserInput[];
  allTeamUsers: FullNameUserInput[];
  constructor(private teamViewService: TeamViewService, private authService: AuthService) { }

  ngOnInit() {
    this.menuTab = 0;
    this.allUsersOutsideTheTeam(this.teamId);
    this.loggedUser = this.authService.getUser();
  }

  allUsersOutsideTheTeam(id: number): void {
    this.teamViewService.usersForAddMember(id).subscribe((res) => {
      this.membersToAdd = res;
    });
  }

  allUsersInTeam(id: number): void {
    this.teamViewService.getAllTeamUsers(id).subscribe((res) => {
      this.allTeamUsers = res;
    });
  }

  changeActiveMenu(id: number): void {
    this.menuTab = id;

    if (id === 0) {
      // Add Memmber
      this.allUsersOutsideTheTeam(this.teamId);
    } else if (id === 1) {
      // Options
      this.allUsersInTeam(this.teamId);
    } else {
      // Remove user ONLY TL
      this.allUsersInTeam(this.teamId);
    }
  }

  checkIfTeamLead(): boolean {
    if (this.loggedUser.id === this.teamViewService.getTeamLead()) {
      return true;
    }

    return false;
  }

}
