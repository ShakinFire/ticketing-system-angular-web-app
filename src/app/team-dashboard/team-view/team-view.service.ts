import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestService } from '../../core/request.service.service';
import { TeamQueue } from '../../models/teams/team-queue';
import { map } from 'rxjs/operators';
import { AssigneeTicketUsers } from '../../models/tickets/assigned-ticket-users';
import { FullNameUserInput } from '../../models/user/addMember';


@Injectable()
export class TeamViewService {
  teamLeadId: number;

  constructor(private reqService: RequestService) {
  }

  getTeamAndTickets(id: number): Observable<TeamQueue> {
    const route: string = '/getTeamAndTickets/' + id;
    return this.reqService.get(route).pipe(map(res => res as TeamQueue));
  }

  getAllTeamUsers(id: number): Observable<FullNameUserInput[]> {
    const route: string = '/getAllUsersOnTeam/' + id;
    return this.reqService.get(route).pipe(map(res => res as FullNameUserInput[]));
  }
  getTeamName(id: number) {
    const route: string = '/getTeamName/' + id;
    return this.reqService.get(route);
  }

  usersForAddMember(id: number): Observable<FullNameUserInput[]> {
    const route: string = '/getAllUsersOutsideTheTeam/' + id;
    return this.reqService.get(route).pipe(map(res => res as FullNameUserInput[]));
  }

  addNewUser(newMember: { id: number, teamId: number }): Observable<AssigneeTicketUsers> {
    return this.reqService.post('/newMember', newMember).pipe(map(res => res as AssigneeTicketUsers));
  }

  changeName(newName: { name: string, teamId: number }): Observable<{ name: string }> {
    return this.reqService.post('/updateTeamName', newName).pipe(map(res => res as { name: string }));
  }

  changeDescription(newDescription: { description: string, teamId: number }): Observable<{ description: string }> {
    return this.reqService.post('/updateTeamDescription', newDescription).pipe(map(res => res as { description: string }));
  }

  changeTeamLeadUser(newUser: { userId: number, teamId: number }): Observable<{ userId: number, teamId: number }> {
    return this.reqService.post('/updateTeamLead', newUser).pipe(map(res => res as { userId: number, teamId: number }));
  }

  leaveTeam(userToLeave: { confirmPassword: string, userId: number, teamId: number }): Observable<{ isValid: boolean }> {
    return this.reqService.post('/userLeaveTeam', userToLeave).pipe(map(res => res as { isValid: boolean }));
  }

  removeUser(userToRemove: { userId: number, teamId: number }): Observable<{ userId: number, teamId: number }> {
    return this.reqService.post('/removeUserFromTeam', userToRemove).pipe(map(res => res as { userId: number, teamId: number }));
  }

  getTeamLead(): number {
    return this.teamLeadId;
  }

  setTeamLead(id): void {
    this.teamLeadId = id;
  }


}
