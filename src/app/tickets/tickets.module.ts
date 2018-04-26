import { GenerateTicketsComponent } from './generate-tickets/generate-tickets.component';
import { FormsModule } from '@angular/forms';
import { TicketsService } from './tickets.service';
import { NgbTypeaheadConfig, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
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
    FormsModule,
    NgbTypeaheadModule,
    TicketsRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
  ],
  declarations: [
    GenerateTicketsComponent,
    AssignedTicketsComponent,
    AllTicketsComponent,
  ],
  providers: [TicketsService, NgbTypeaheadConfig, NgbTypeaheadModule],
  exports: [
    GenerateTicketsComponent
  ],

})
export class TicketsModule { }
