import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  formSwitch: boolean;
  constructor() { }

  ngOnInit() {
    this.formSwitch = false;
  }

  formShow(): boolean {
    if(this.formSwitch) {
      this.formSwitch = false;
    } else {
      this.formSwitch = true;
    }
    return false;
  }

}
