import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TicketsRoutingModule } from './tickets-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedTicketsComponent } from './assigned-tickets/assigned-tickets.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TicketsRoutingModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    AssignedTicketsComponent,
    AllTicketsComponent
  ]
})
export class TicketsModule { }
