import { TeamViewService } from './../../team-view/team-view.service';
import { myTeamsDash } from './../../../models/teams/my-teams';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FullNameUserInput } from '../../../models/user/addMember';
import { TokenUser } from '../../../models/user/token-user';
import { TeamQueue } from '../../../models/teams/team-queue';
import { AuthService } from '../../../core/auth/auth.service';
import { NotificationService } from '../../../notification/notification.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() membersToAdd: FullNameUserInput[];
  @Input() teamId: number;
  newUser: FullNameUserInput;
  message: string;
  isError: boolean;
  showHide: boolean;
  user: TokenUser;
  teamName: string;


  constructor(private teamViewService: TeamViewService, private authService: AuthService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.showHide = false;
    this.teamViewService.getTeamName(this.teamId).map(res => res as { teamName: string }).subscribe(res => {
      this.teamName = res.teamName;
      this.user = this.authService.getUser();
      console.log(this.user.firstName);
    });

  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.membersToAdd.filter(member => member.name.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));

  formatter = (x: { name: string }) => x.name;

  addMember() {

    if (this.newUser.id) {
      this.message = 'You successfully added ' + this.newUser.name + ' to the team!';
      const notification = {
        content: `${this.user.firstName} invited you to join a team ${this.teamName} `,
        type: 'team',
        nameType: this.teamName,
        userId: this.newUser.id,
      }
      this.notificationService.addNotification(notification).subscribe(res => {
        console.log(res);

        // this.teamViewService.addNewUser({ id: this.newUser.id, teamId: this.teamId }).subscribe(() => { // subscribe returns the newly added member
        this.isError = false;
        this.showHide = true;
        setTimeout(() => {
          this.showHide = false;
        }, 3000);
      });
    } else {
      this.message = 'No such user found!';
      this.isError = true;
      this.showHide = true;
    }

    this.newUser = null;
  }
}
