import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLoggedNav() {
    return this.authService.isAuth();
  }

}
