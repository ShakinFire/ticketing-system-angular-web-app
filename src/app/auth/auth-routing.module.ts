import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthGuard } from '../shared/auth-guard';

const routes: Routes = [
  /*
  {path: 'sign-in', component: AuthComponent, canActivate: [AuthGuard]}
  */
  {path: 'sign-in', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
