import { TokenUser } from './../models/user/token-user';
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
  userFirstName: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.dropDownSwitch = false;
    this.rotate = '';
  }

  isLoggedNav(): boolean {
    if (this.authService.isAuth()) {
      const nameHolder: TokenUser = this.authService.getUser();
      this.userFirstName = nameHolder.firstName;
      return true;
    }
  
    return false;
  }

  dropDown(): void {
    if (this.dropDownSwitch) {
      this.dropDownSwitch = false;
      this.rotate = '';
    } else {
      this.dropDownSwitch = true;
      this.rotate = 'fa-rotate-180';
    }
  }

  onClickedOutside(e): void {
    this.rotate = '';
    this.dropDownSwitch = false;
  }

  logoutNav(): void {
    this.dropDownSwitch = false;
    this.authService.logout();
  }

}
