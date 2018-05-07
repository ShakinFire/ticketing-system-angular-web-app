import { TeamViewComponent } from './team-view/team-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamViewGuardService } from '../core/auth-guard/team-view-guard.service';

const routes: Routes = [
  {
    path: ':id', component: TeamViewComponent, canActivate: [TeamViewGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamDashboardRoutingModule { }
