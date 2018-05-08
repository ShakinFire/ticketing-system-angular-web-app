import { TokenUser } from './../../../models/user/token-user';
import { FullNameUserInput } from './../../../models/user/addMember';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { TeamViewService } from '../../team-view/team-view.service';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../notification/notification.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  providers: [NgbTypeaheadConfig],
})
export class OptionsComponent implements OnInit {
  @Input() teamId: number;
  @Input() allTeamUsers: FullNameUserInput[];
  newTeamName: string;
  closeResult: string;
  message: string;
  isError: boolean;
  showHide: boolean;
  modalShowHide: boolean;
  newTeamDescription: string;
  confirmPassword: string;
  loggedUser: TokenUser;
  modalRef: NgbModalRef;
  newTeamLead: FullNameUserInput;
  teamName: string;
  constructor(private modalService: NgbModal, private teamViewService: TeamViewService, private authService: AuthService, private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.showHide = false;
    this.modalShowHide = false;
    this.loggedUser = this.authService.getUser();
    this.teamViewService.getTeamName(this.teamId).subscribe(res => {
      this.teamName = res.teamName;
    });
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.allTeamUsers.filter(user => user.name.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));

  formatter = (x: { name: string }) => x.name;

  changeTeamName(): void {
    if (this.newTeamName.length > 3) {
      this.changeToSuccess('You successfully changed the team name to ' + this.newTeamName);
      this.teamViewService.changeName({ name: this.newTeamName, teamId: this.teamId }).subscribe();
    } else {
      this.changeToError('The team name must be at least 4 characters');
    }

    this.newTeamName = '';
  }

  changeTeamDescription(): void {
    if (this.newTeamDescription.length > 3) {
      this.changeToSuccess('You successfully changed the description!');
      this.teamViewService.changeDescription({ description: this.newTeamDescription, teamId: this.teamId }).subscribe();
    } else {
      this.changeToError('The description must be at least 4 characters');
    }

    this.newTeamDescription = '';
  }

  changeTeamLead(): void {
    const teamLeadId: number = this.newTeamLead.id;
    if (teamLeadId) {
      this.teamViewService.changeTeamLeadUser({ userId: this.newTeamLead.id, teamId: this.teamId }).subscribe((res) => {
        const notification = {
          content: `${this.loggedUser.firstName} indicated you for the new Team Lead Team ${this.teamName} `,
          type: 'viewTeam',
          nameType: this.teamName,
          userId: teamLeadId,
        }
        console.log(notification);
        this.notificationService.addNotification(notification).subscribe(res => {
          console.log(res);
        });
        this.teamViewService.setTeamLead(teamLeadId);
        this.changeToSuccess('You successfully transfer team lead to ' + this.newTeamLead.name);
      });
    } else {
      this.changeToError('There is no user with this name in your team!');
    }

    this.newTeamLead = null;
  }

  leaveTeamModal(content): void {
    this.modalShowHide = false;
    this.modalRef = this.modalService.open(content);
  }

  leaveCurrentTeam(): void {
    if (this.confirmPassword.length >= 6) {
      this.teamViewService.leaveTeam({ confirmPassword: this.confirmPassword, userId: this.loggedUser.id, teamId: this.teamId }).subscribe((res) => {
        if (res.isValid) {
          this.message = 'You successfully left the team!';
          this.isError = false;
          this.modalShowHide = true;
          setTimeout(() => {
            this.modalShowHide = false;
            this.router.navigate(['dashboard']);
            this.modalRef.close();
          }, 2500);
        } else {
          this.message = 'Password is incorrect';
          this.isError = true;
          this.modalShowHide = true;
        }
      });
    } else {
      this.message = 'Password must be at least 6 characters';
      this.isError = true;
      this.modalShowHide = true;
    }
  }

  checkIfTeamLead(): boolean {
    if (this.loggedUser.id === this.teamViewService.getTeamLead()) {
      return true;
    }

    return false;
  }

  private changeToError(errorMessage): void {
    this.message = errorMessage;
    this.isError = true;
    this.showHide = true;
  }

  private changeToSuccess(successMessage): void {
    this.message = successMessage;
    this.isError = false;
    this.showHide = true;
    setTimeout(() => {
      this.showHide = false;
    }, 3000);
  }

}
