import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { GenerateTicketsComponent } from "./tickets/generate-tickets/generate-tickets.component";
import { GenerateTeamComponent } from "./teams/generate-team/generate-team.component";
import { HomeGuard } from "./core/auth-guard/home-guard.service";
import { NotificationComponent } from "./notification/notification.component";
// import { NotificationComponent } from "./notification/notification.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate: [HomeGuard] },
    {
        path: 'auth', loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'dashboard', loadChildren: './tickets/tickets.module#TicketsModule'
    },
    {
        path: 'ticket-view', loadChildren: './ticket-view-comments/ticket-view.module#TicketViewModule'
    },
    // {path: 'create-ticket', loadChildren: './tickets/tickets.module#TicketsModule'}
    { path: 'create-ticket', component: GenerateTicketsComponent },
    { path: 'create-team', component: GenerateTeamComponent },
    { path: 'notification', component: NotificationComponent }
];