import { Router } from '@angular/router';
import { AuthService } from './../../access/auth/auth.service';
import { AppUser } from './../../access/auth/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: AppUser | undefined = undefined;

  constructor(
    public authService: AuthService,
    public router: Router)
  {}

  ngOnInit(): void {
    this.authService.$loggedUser.subscribe((user: AppUser | undefined) => {
      if (user)
        this.user = user;
    })
  }

  public onLogoutClick(): void {
    this.authService.logout();
  }
}
