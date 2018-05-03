import { Injectable } from '@angular/core';
import { RequestService } from '../core/request.service.service';
import { Observable } from 'rxjs/Observable';
import { TicketModel } from '../models/tickets/ticket-model';
import { map } from 'rxjs/operators';
import { NewNotification } from '../models/notifications/new-notification';

@Injectable()
export class NotificationService {

  constructor(private req: RequestService) { }

  addNotification(notification: any) {
    console.log('i am');
    console.log(notification);
    return this.req.post('/create-notification', notification).pipe(map(res => console.log(res)));
  }
  // getTicket() {
  //   return this.req.get('/getAllTicketsDataLessTwo').pipe(map((res) => res as TicketModel));

  // }

  getNotification(id) {
    const uid = id;
    return this.req.get('/notificationUser/' + uid).pipe(map((res) => res as { result: NewNotification[] }));
  }
}
