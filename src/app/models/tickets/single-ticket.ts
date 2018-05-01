import { TicketComments } from './../comments/ticket-comments';

export class SingleTicket {
    title: string;
    description: string;
    labels: string;
    status: string;
    estimated: Date;
    date: Date;
    updatedAt: Date;
    attach: string;
    comments: TicketComments[];
}