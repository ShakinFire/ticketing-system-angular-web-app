import { TeamQueueTicket } from './../tickets/team-queue-ticket';
import { AssigneeTicketUsers } from '../tickets/assigned-ticket-users';

export class TeamQueue {
    createdAt: Date;
    updatedAt: Date;
    id: number;
    teamLead: number;
    description: string;
    name: string;
    totalMembers: number;
    teamUser: AssigneeTicketUsers;
    tickets: TeamQueueTicket[];
}