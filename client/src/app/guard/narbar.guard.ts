import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavBarService } from '../services/nav-bar.service';

@Injectable({
  providedIn: 'root'
})
export class NarbarGuard implements CanActivate {
  constructor(
    private navbarService: NavBarService
  ) { }
  pages = ["/login", "/player", "/raking", "/create-quiz", "/loppy", "/join-game", '/host'];

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url = state.url;
    let isPage = this.pages.includes(url);
    if (isPage) {
      // console.log('page:'+page);
      console.log('url:' + url);
      this.navbarService.visible = false;
    } else {
      this.navbarService.visible = true;
    }
    return true;
  }
}
