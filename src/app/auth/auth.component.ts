import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms/src/model';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from '../core/auth/auth.service';
import { LoginUser } from '../models/user/login-user';
import { RegUser } from '../models/user/reg-user';
import { HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  formSwitch: boolean;
  loginData: LoginUser;
  regData: RegUser;
  errorMessage: string;
  isError: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.formSwitch = false;
    this.isError = false;
  }

  formShow(): boolean {
    if (this.isError) {
      this.isError = false;
    }

    if(this.formSwitch) {
      this.formSwitch = false;
    } else {
      this.formSwitch = true;
    }
    return false;
  }

  validate(data): string {
    if (data.password.length < 6) {
      return 'Error: Password should be at least 6 characters';
    }

    // this should be regex
    if (data.email.length < 4) {
      return 'Error: Username should be at least 4 characters';
    }
    if(data.firstName) {
      if (data.firstName.length < 2 || data.lastName.length < 2) {
        return 'Error: Invalid name length';
      }

      if (data.password !== data.repeatPassword) {
        return 'Error: Password does not match';
      }
    }
  }

  onLogin(form: NgForm): void {
    this.loginData = form.value;
    this.errorMessage = this.validate(this.loginData);
    if (this.errorMessage) {
      this.isError = true;
    } else {
      this.authService.login(this.loginData).map(x=><{message: string}>(x)).subscribe(
        (res) => {
          if (res.message) {
            this.errorMessage = res.message;
            this.isError = true;
          } else {
            this.isError = false;

            // should redirect to dashboard
            console.log('You logged in successfully');
            console.log(res);
          }
        }
      )
    }
  }

  onReg(form: NgForm): void {
    this.regData = form.value;
    this.errorMessage = this.validate(this.regData);
    if (this.errorMessage) {
      this.isError = true;
    } else {
      this.isError = false;

    }
  }

  // Testing auth
  onAuth(): void{
    this.authService.test().subscribe(x=>x);
  }
}
