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
  constructor(private auth:Auth,private authService:AuthService,private router:Router,
    private  navbarService: NavBarService
    ) { }

  pages=["/login","/player","/ranking","/create-quiz","/loppy","/library"];
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url=state.url;
      let isPage= this.pages.includes(url);
        if(isPage){
          // console.log('page:'+page);
          console.log('url:'+url);
          this.navbarService.visible = false;
        }else{
          this.navbarService.visible = true;
        }
      return true;
    // return new Promise((resolve,reject)=>{
    //   onAuthStateChanged(this.auth,(ueserInfo)=>{
    //     if(ueserInfo){
    //       this.authService.userInfo = ueserInfo;
    //       resolve(true);
    //     }else{
    //       this.authService.userInfo = null;
    //       window.alert('You need to login to access this page!');
    //       this.router.navigate(['/login']);
    //       resolve(false);
    //     }
    //   })
    // })
  }
  
}
