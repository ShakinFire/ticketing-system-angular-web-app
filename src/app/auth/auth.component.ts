import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms/src/model';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  formSwitch: boolean;
  loginData: Object;
  errorMessage: string;
  isError: boolean;

  constructor() { }

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

    if (data.username.length < 4) {
      return 'Error: Username should be at least 4 characters';
    }
    if(data.name) {
      if (data.name.length < 2) {
        return 'Error: Invalid name length';
      }

      if (data.password !== data.repeatPassword) {
        return 'Error: Password does not match';
      }
    }
  }

  formsData(form: FormGroup): void {
    this.loginData = form.value;
    this.errorMessage = this.validate(this.loginData);
    if (this.errorMessage) {
      this.isError = true;
    } else {
      this.isError = false;
    }
  }
}
