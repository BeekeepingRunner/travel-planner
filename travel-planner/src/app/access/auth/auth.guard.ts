import { AppUser } from './user';
import { first } from 'rxjs';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService
    ) {}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Promise<boolean> {
        return this.authService.$loggedUser.pipe(first())
            .toPromise().then((user: AppUser | undefined) => {
                if (user)
                    return true;
                else return false;
            });
    }
  }