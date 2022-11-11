import { Router } from '@angular/router';
import { AppUser } from './user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static readonly USER_MAIL_KEY: string = 'userMail';
  private static readonly USER_NAME_KEY: string = 'userName';

  constructor(
    public auth: AngularFireAuth,
    public router: Router
  ) { }

  public login(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider)
      .then(result => {
        const user: firebase.User | null = result.user;
        if (user?.email && user?.displayName) {
          const appUser: AppUser = {
            email: user.email,
            displayName: user.displayName
          }
          AuthService.saveUser(appUser);
          this.router.navigate(['home']);
        }
      });
  }

  public static saveUser(user: AppUser): void {
    window.localStorage.setItem(this.USER_MAIL_KEY, user.email);
    window.localStorage.setItem(this.USER_NAME_KEY, user.displayName);
  }

  public static getUser(): AppUser | null {
    const mail: string | null = window.localStorage.getItem(this.USER_MAIL_KEY);
    const name: string | null = window.localStorage.getItem(this.USER_NAME_KEY);
    if (mail && name) {
      const user: AppUser = {
        email: mail,
        displayName: name
      };
      return user;
    }
    else return null;
  }

  public logout(): void {
    window.localStorage.clear();
    this.router.navigate(['login']);
  }
}
