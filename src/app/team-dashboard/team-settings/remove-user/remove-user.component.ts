import { TeamViewService } from './../../team-view/team-view.service';
import { Component, OnInit, Input } from '@angular/core';
import { myTeamsDash } from '../../../models/teams/my-teams';
import { Observable } from 'rxjs/Observable';
import { FullNameUserInput } from '../../../models/user/addMember';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css'],
  providers: [ NgbTypeaheadConfig ],
})
export class RemoveUserComponent implements OnInit {
  @Input() allTeamUsers: FullNameUserInput[];
  @Input() teamId: number;
  removedUser: FullNameUserInput;
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
        : this.allTeamUsers.filter(member => member.name.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));
  
  formatter = (x: {name: string}) => x.name;

  removeMember() {
    if (this.removedUser.id) {
      this.message = 'You successfully removed ' + this.removedUser.name + ' from the team!';
      this.teamViewService.removeUser({ userId: this.removedUser.id, teamId: this.teamId }).subscribe(() => {
        this.isError = false;
        this.showHide = true;
        setTimeout(() => {
          this.showHide = false;
        }, 3000);
      });
    } else {
      this.message = 'No such user found in this team!';
      this.isError = true;
      this.showHide = true;
    }

    this.removedUser = null;
  }
}
