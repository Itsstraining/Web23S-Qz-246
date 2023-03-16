import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/ngrx/states/user.state';
import { AuthService } from 'src/app/services/auth.service';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { User } from 'src/models/user.model';
import * as UserActions from '../.././ngrx/actions/user.action';
@Component({
  selector: 'app-nar-bar',
  templateUrl: './nar-bar.component.html',
  styleUrls: ['./nar-bar.component.scss']
})
export class NarBarComponent {
  user$: Observable<User|null>;
  infoUser?:User|null;
  constructor(public authService:AuthService, public nav:NavBarService,
    private store: Store<{
      user: UserState
    }>){
      this.user$ = this.store.select(state => state.user.user);
      this.user$.subscribe((user: any) => {
          this.infoUser=user;
      // console.log(this.user);
    });
    }

  ngOnInit(): void {
    this.user$.subscribe((user: any) => {
        this.infoUser=user;
    // console.log(this.user);
  });
  }

  async logOut(){
    await this.authService.logoutWithGoogle();
    this.infoUser=null;
  }
}
