import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketsService } from '../tickets.service';
import { NgForm } from '@angular/forms';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { NotificationService } from '../../notification/notification.service';
import { AuthService } from '../../core/auth/auth.service';
import { TokenUser } from '../../models/user/token-user';


@Component({
  selector: 'app-generate-tickets',
  templateUrl: './generate-tickets.component.html',
  styleUrls: ['./generate-tickets.component.css'],
  providers: [NgbTypeaheadConfig]
})
export class GenerateTicketsComponent implements OnInit {
  public teamss: any;
  public requester: any;
  public assignee: any;
  teams: any[];
  errorMessage: string;
  isError: boolean;
  users: any;
  usersReqAs: any;
  userId: number;


  constructor(private ticketService: TicketsService, private config: NgbTypeaheadConfig,
    private notService: NotificationService, private authService: AuthService) {
    config.showHint = true;
  }
  ngOnInit() {
    this.userId = this.authService.getUser().id
    console.log(this.userId);
    this.ticketService.getUserTeams(this.userId).subscribe(data => {
      this.teams = data.teams;

    });

  }

  validate(data): string {
    if (data.title.length < 4) {
      return 'Error: Title should be at least 4 characters'
    }
    if (data.labels.length < 2) {
      return 'Error: Labels should be at least 2 characters'
    }
    if (data.description.length < 1) {
      return 'Error: Write a description'
    }
    if (data.team.length < 1) {
      return 'Error: You have not chosen a team'
    }
    if (data.assigneeName.length < 1) {
      return 'Error: You have not chosen a assignee'
    }
    if (data.requesterName.length < 1) {
      return 'Error: You have not chosen a assignee'
    }
    if (data.estimated.length < 10) {
      return 'Error: you did not select the correct date'
    }
  }




  searchTeam = (text$: Observable<string>) =>
    text$
      .debounceTime(100)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.teams.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));


  fun() {

    this.ticketService.getTeamUsers(this.teamss).subscribe(data => {
      this.users = data.users;
      this.usersReqAs = this.users.map(x => x.name);
    });
  }

  searchRequester = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.usersReqAs.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));

  searchAssignee = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.usersReqAs.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));


  ticketFormsData(ticketForm: NgForm) {
    console.log(ticketForm.value);
    this.errorMessage = this.validate(ticketForm.value);

    // if (this.errorMessage) {
    //   this.isError = true;
    // } else {
      this.isError = false;
      const assigneeUserId = this.users.find(x => x.name === ticketForm.value.assigneeName);
      ticketForm.value.assigneeId = assigneeUserId.id;

      const requesterUserId = this.users.find(x => x.name === ticketForm.value.requesterName);
      ticketForm.value.userId = requesterUserId.id;

      ticketForm.value.status = 'OPEN';

      const notification = {
        content: `${ticketForm.value.requesterName} assignee you a ticket ${ticketForm.value.title}`,
        type: 'ticket',
        nameType: ticketForm.value.title,
        userId: ticketForm.value.assigneeName
      }

      this.notService.addNotification(notification).subscribe(data => {
        console.log(data);
      })

      this.ticketService.addTicket(ticketForm.value);

      ticketForm.resetForm();
    // }
  }

}
