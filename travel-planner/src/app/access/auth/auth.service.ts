import { BehaviorSubject, Observable, first } from 'rxjs';
import { Router } from '@angular/router';
import { AppUser } from './user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loggedUser: BehaviorSubject<AppUser | undefined> = new BehaviorSubject<AppUser | undefined>(undefined);
  public $loggedUser: Observable<AppUser | undefined> = this._loggedUser.asObservable();

  constructor(
    public auth: AngularFireAuth,
    public router: Router
  ) {
    this.auth.onAuthStateChanged((user: firebase.User | null) => {
      if (user) {
        if (user?.uid && user?.email && user.displayName) {
          const appUser: AppUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName
          }
          this._loggedUser.next(appUser);
          this.router.navigate(['home']);
        }
      } else {
        this._loggedUser.next(undefined);
        this.router.navigate(['login']);
      } 
    });
  }

  public login(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider);
  }

  public logout(): void {
    this.auth.signOut();
  }
}