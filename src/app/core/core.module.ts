import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '../shared/auth-guard';
import { RequestService } from './request.service.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    AuthService,
    AuthGuard,
    RequestService
  ],
})
export class CoreModule { }
