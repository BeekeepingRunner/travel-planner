import { map, Observable } from 'rxjs';
import { AppUser } from './../../access/auth/user';
import { AuthService } from './../../access/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: AuthService) { }

  public getUserUid(): Observable<string> {
    return this.auth.$loggedUser.pipe(
      map(user => user ? user.uid : '')
    );
  }
}
