import { AssigneeTicketUsers } from './../tickets/assigned-ticket-users';

export class TicketComments {
    content: string;
    createdAt: Date;
    users: AssigneeTicketUsers;
}