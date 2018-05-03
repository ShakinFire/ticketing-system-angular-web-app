import { AuthService } from './../../core/auth/auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component, OnInit, Input } from '@angular/core';
import { AssigneeTicketUsers } from '../../models/tickets/assigned-ticket-users';
import { SingleTicket } from '../../models/tickets/single-ticket';
import { TicketViewService } from '../ticket-view/ticket-view.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TicketsService } from '../../tickets/tickets.service';
import { myTeamsDash } from '../../models/teams/my-teams';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { TokenUser } from '../../models/user/token-user';

@Component({
  selector: 'app-ticket-aside',
  templateUrl: './ticket-aside.component.html',
  styleUrls: ['./ticket-aside.component.css'],
  providers: [ NgbTypeaheadConfig ],
})
export class TicketAsideComponent implements OnInit {
  @Input() ticket: SingleTicket;
  @Input() requester: AssigneeTicketUsers;
  @Input() assignee: AssigneeTicketUsers;
  allTeamMembers: myTeamsDash[];
  editSwitch: boolean;
  loggedUser: TokenUser;
  assigneeModel: { id: number, name: string };
  requesterModel: { id: number, name: string };

  constructor(private ticketView: TicketViewService, private modalService: NgbModal, private ticketService: TicketsService, private authService: AuthService) { }
  
  ngOnInit() {
    this.editSwitch = false;
  }
  
  _showHide(edit): boolean {
    if (edit) {
      return false;
    }
      return true;
  }

  _getAllUsers(): void {
    this.ticketService.getTeamUsers(this.ticket.teams[0].name).subscribe((res) => {
      this.allTeamMembers = res.users;
      console.log(this.allTeamMembers);
    });
  }

  showChangeStatus(): void {
    this.editSwitch = this._showHide(this.editSwitch);
  }


  openAssigneeModal(content): void {
    this.modalService.open(content);
    if (!this.allTeamMembers) {
      this._getAllUsers();
    }
  }

  openRequesterModal(content): void {
    this.modalService.open(content);
    if (!this.allTeamMembers) {
      this._getAllUsers();
    }
  }

  checkIfRequester(): boolean {
    this.loggedUser = this.authService.getUser();
    if (this.loggedUser.id === this.requester.id) {
      return true;
    }
    
    return false;
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.allTeamMembers.filter(member => member.name.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));
  
  formatter = (x: {name: string}) => x.name;

  changeAssignee(): void {
    if (typeof this.assigneeModel === 'string') {
      console.log('error');
    } else {
      const oldNewAssignee = {
        newId: this.assigneeModel.id,
        ticketId: this.ticket.id,
      };
      this.assigneeModel.name = '';
      this.ticketView.newAssignee(oldNewAssignee).subscribe((res) => {
        // *TODO: Send notification about the change of the assignee
        // Might be good to redirect to dashboard
        console.log(res);
      });
    }
  }

  changeRequester(f: NgForm): void {
    if (typeof this.requesterModel === 'string') {
      console.log('error');
    } else {
      const oldNewRequester = {
        newId: this.requesterModel.id,
        ticketId: this.ticket.id,
      };
      this.requesterModel.name = '';
      this.ticketView.newRequester(oldNewRequester).subscribe((res) => {
        // *TODO: Send notification about the change of the reqester
        // Might be good to redirect to dashboard
        console.log(res);
      });
    }
  }

  onClickedOutside(e): void {
    this.editSwitch = false;
  }
  
  changeStatus(status: string): boolean {
    if (this.ticket.status !== status) {
      if (status === 'COMPLETED') {
        // *TODO: Send notification to the requester
      }
      this.ticket.status = status;
      this.ticketView.updateStatus({ status: status, ticketId: this.ticket.id }).subscribe();
    }
    
    this.editSwitch = false;
    return false;
  }
}
