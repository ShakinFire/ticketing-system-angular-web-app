import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth-guard/auth-guard.service';
import { GenerateTicketsComponent } from '../tickets/generate-tickets/generate-tickets.component';

const routes: Routes = [
    { path: '', component: GenerateTicketsComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamsRoutingModule { }
