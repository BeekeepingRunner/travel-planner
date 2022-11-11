import { AppUser } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_MAIL_KEY: string = 'userMail';
  private readonly USER_NAME_KEY: string = 'userName';

  constructor() { }

  public saveUser(user: AppUser): void {
    window.localStorage.setItem(this.USER_MAIL_KEY, user.email);
    window.localStorage.setItem(this.USER_NAME_KEY, user.displayName);
  }

  public getUser(): AppUser | null {
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
}
