import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-nar-bar',
  templateUrl: './nar-bar.component.html',
  styleUrls: ['./nar-bar.component.scss']
})
export class NarBarComponent {
  constructor(public authService:AuthService, public nav:NavBarService){}
  user = this.authService.userInfo;
  ngOnInit(): void {
    console.log(this.user);
  }

  async logOut(){
    await this.authService.logoutWithGoogle();
  }
}
