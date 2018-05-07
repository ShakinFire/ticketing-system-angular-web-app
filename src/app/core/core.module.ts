import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { RequestService } from './request.service.service';
import { AuthGuard } from './auth-guard/auth-guard.service';
import { HomeGuard } from './auth-guard/home-guard.service';
import { TeamViewGuardService } from './auth-guard/team-view-guard.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    AuthService,
    AuthGuard,
    RequestService,
    HomeGuard,
    TeamViewGuardService,
  ],
})
export class CoreModule { }
