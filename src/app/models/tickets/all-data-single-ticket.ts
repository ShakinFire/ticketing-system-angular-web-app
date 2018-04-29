import { SingleTicket } from './single-ticket';
import { AssigneeTicketUsers } from './assigned-ticket-users';

export class AllDataSingleTicket {
    assignee: AssigneeTicketUsers;
    requester: AssigneeTicketUsers;
    ticket: SingleTicket;
}