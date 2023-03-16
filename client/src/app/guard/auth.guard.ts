import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { onAuthStateChanged } from '@firebase/auth';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';
import { NavBarService } from '../services/nav-bar.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private authService: AuthService, private router: Router,) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (userInfo) => {
        if (userInfo) {
          // this.authService.userInfo = userInfo;
          this.authService.userInfo = {
            userid: userInfo?.uid as string,
            displayName: userInfo?.displayName as string,
            email: userInfo?.email as string,
            photoURL: userInfo?.photoURL as string
          };
          resolve(true);
        } else {
          this.authService.userInfo = null;
          // window.alert('You need to login to access this page!');
          this.router.navigate(['/login']);
          resolve(false);
        }
      })
    })
  }

}
