import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  formSwitch: boolean;
  isActive: boolean;
  constructor() { }

  ngOnInit() {
    this.formSwitch = false;
    this.isActive = false;
  }

  formShow(): boolean {
    if(this.formSwitch) {
      this.isActive = false;
      this.formSwitch = false;
    } else {
      this.isActive = true;
      this.formSwitch = true;
    }
    return false;
  }
}
