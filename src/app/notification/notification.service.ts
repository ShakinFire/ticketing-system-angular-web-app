import { Injectable } from '@angular/core';
import { RequestService } from '../core/request.service.service';
import { Observable } from 'rxjs/Observable';
import { TicketModel } from '../models/tickets/ticket-model';
import { map } from 'rxjs/operators';

@Injectable()
export class NotificationService {

  constructor(private req: RequestService) { }

  addNotification(notification: any) {
    console.log(notification);
    return this.req.post('/create-notification', notification).subscribe(data => {
      console.log(data);
    });
  }
  // getTicket() {
  //   return this.req.get('/getAllTicketsDataLessTwo').pipe(map((res) => res as TicketModel));

  // }

  getNotification(id) {
    console.log('i am service notification')
    const uid = id;
    console.log(uid);
    return this.req.get('/notificationUser/' + uid);
  }
}
