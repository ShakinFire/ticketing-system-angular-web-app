import { GenerateTicketsComponent } from './generate-tickets/generate-tickets.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth-guard/auth-guard.service';

const routes: Routes = [
    { path: '', component: AllTicketsComponent, canActivate: [AuthGuard] },
    { path: 'create-ticket', component: GenerateTicketsComponent, canActivate: [AuthGuard], },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketsRoutingModule { }
