import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  dropDownSwitch: boolean;
  rotate: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.dropDownSwitch = false;
    this.rotate = '';
  }

  isLoggedNav() {
    return this.authService.isAuth();
  }

  dropDown() {
    if (this.dropDownSwitch) {
      this.dropDownSwitch = false;
      this.rotate = '';
    } else {
      this.dropDownSwitch = true;
      this.rotate = 'fa-rotate-180';
    }
  }

  onClickedOutside(e) {
    this.rotate = '';
    this.dropDownSwitch = false;
  }

  logoutNav(): void {
    this.dropDownSwitch = false;
    this.authService.logout();
  }

}
