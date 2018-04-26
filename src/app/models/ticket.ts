import {StatusTicket} from './status-ticket.enum';

export class Ticket {
    title: string;
    description: string;
    label: string;
    status: StatusTicket;
    estimated: Date;
    requester: string;
    assignee: string;
    team: string;
    attach?: string;    
}