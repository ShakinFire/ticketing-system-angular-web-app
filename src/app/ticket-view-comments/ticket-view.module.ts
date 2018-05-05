import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketViewRoutingModule } from './ticket-view-routing.module';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { TicketDescriptionComponent } from './ticket-description/ticket-description.component';
import { TicketCommentsComponent } from './ticket-comments/ticket-comments.component';
import { TicketAsideComponent } from './ticket-aside/ticket-aside.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TicketViewService } from './ticket-view/ticket-view.service';
import { SharedModule } from '../shared/shared.module';
import { TicketCreateCommentComponent } from './ticket-create-comment/ticket-create-comment.component';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng4-click-outside';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TicketViewRoutingModule,
    AngularFontAwesomeModule,
    SharedModule,
    FormsModule,
    ClickOutsideModule,
    NgbModule,
  ],
  declarations: [
    TicketViewComponent,
    TicketDescriptionComponent,
    TicketCommentsComponent,
    TicketAsideComponent,
    TicketCreateCommentComponent,
  ],
  providers: [
    TicketViewService,
  ]
})
export class TicketViewModule { }
