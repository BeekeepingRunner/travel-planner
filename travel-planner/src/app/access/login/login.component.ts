import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  public onLoginCLick(): void {
    this.authService.login();
  }
}
