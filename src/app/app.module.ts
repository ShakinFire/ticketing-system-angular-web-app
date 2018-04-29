import { TicketViewModule } from './ticket-view-comments/ticket-view.module';
import { TicketsModule } from './tickets/tickets.module';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AppConfig } from './config/app-config';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { TeamsModule } from './teams/teams.module';
import { tokenGetter } from './models/token/token-getter';
import { ClickOutsideModule } from 'ng4-click-outside';
import { AssignedTicketsService } from './tickets/assigned-tickets/assigned-tickets.service';

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFontAwesomeModule,
    ClickOutsideModule,
    AuthModule,
    TicketsModule,
    TicketViewModule,
    TeamsModule,
    CoreModule,
    HttpClientModule,
    TicketsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [
    AppConfig,
    AssignedTicketsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
