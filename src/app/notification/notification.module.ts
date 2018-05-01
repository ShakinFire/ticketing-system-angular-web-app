import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { SharedModule } from '../shared/shared.module';

import { NotificationService } from './notification.service';

@NgModule({
  imports: [
    CommonModule,
    NotificationRoutingModule,
    SharedModule
  ],
  declarations: [NotificationComponent,],
  providers: [
    NotificationService,
  ],
})
export class NotificationModule { }
