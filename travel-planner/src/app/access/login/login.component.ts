import { AppUser } from './../auth/user';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }
  
  ngOnInit(): void {
  }

  public onLoginCLick(): void {
    this.authService.login();
  }
}
