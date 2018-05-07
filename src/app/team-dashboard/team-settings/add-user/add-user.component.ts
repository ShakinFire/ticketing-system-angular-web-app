import { TeamViewService } from './../../team-view/team-view.service';
import { myTeamsDash } from './../../../models/teams/my-teams';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FullNameUserInput } from '../../../models/user/addMember';

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
  constructor(private teamViewService: TeamViewService) { }

  ngOnInit() {
    this.showHide = false;
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.membersToAdd.filter(member => member.name.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));
  
  formatter = (x: {name: string}) => x.name;

  addMember() {
    // *TODO: First we should send notification, and if the notification is accepted, then use this function to add the member
    if (this.newUser.id) {
      this.message = 'You successfully added ' + this.newUser.name + ' to the team!';
      this.teamViewService.addNewUser({ id: this.newUser.id, teamId: this.teamId }).subscribe(() => { // subscribe returns the newly added member
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
