import { AssigneeTicketUsers } from "./assigned-ticket-users";

export class TeamQueueTicket {
    estimated: Date;
    createdAt: Date;
    status: string;
    labels: string;
    id: number;
    title: string;
    description: string;
    assigneeId: number;
    userId: number;
    assignee: AssigneeTicketUsers;
    requester: AssigneeTicketUsers;
}