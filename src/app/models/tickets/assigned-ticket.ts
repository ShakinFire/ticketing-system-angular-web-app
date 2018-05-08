import { AssigneeTicketUsers } from './assigned-ticket-users';
import { TeamResponse } from '../teams/my-team-response';

export class AssigneeTicket {
    createdAt: string;
    date: string;
    id: number;
    labels: string;
    status: string;
    title: string;
    userId: number;
    users: AssigneeTicketUsers;
    totalComments: number;
    teams: TeamResponse;
}