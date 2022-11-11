import { AuthService } from './../../access/auth/auth.service';
import { AppUser } from './../../access/auth/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public user: AppUser | undefined = undefined;

  constructor(public authService: AuthService) {
    const optionalUser = AuthService.getUser();
    if (optionalUser)
      this.user = optionalUser;
  }

  public onLogoutClick(): void {
    this.authService.logout();
  }
}
