import { myTeamsDash } from './../teams/my-teams';
import { TicketComments } from './../comments/ticket-comments';

export class SingleTicket {
    id: number;
    title: string;
    description: string;
    labels: string;
    status: string;
    estimated: Date;
    date: Date;
    updatedAt: Date;
    attach: string;
    userId: number;
    comments: TicketComments[];
    teams: myTeamsDash[];
}