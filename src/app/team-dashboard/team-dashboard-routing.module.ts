import { AuthGuard } from './../core/auth-guard/auth-guard.service';
import { TeamViewComponent } from './team-view/team-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ':id', component: TeamViewComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamDashboardRoutingModule { }
