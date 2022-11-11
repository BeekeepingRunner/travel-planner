import { AuthService } from './../auth/auth.service';
import { AppUser } from './../auth/user';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(
    public auth: AngularFireAuth,
    public authService: AuthService,
    public router: Router
  ) { }

  public onLoginCLick(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider)
      .then(result => {
        const user: firebase.User | null = result.user;
        if (user?.email && user?.displayName) {
          const appUser: AppUser = {
            email: user.email,
            displayName: user.displayName
          }
          this.authService.saveUser(appUser);
          this.router.navigate(['home']);
        }
      });
  }
}
