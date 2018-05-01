import { AssigneeTicketUsers } from './assigned-ticket-users';

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
}